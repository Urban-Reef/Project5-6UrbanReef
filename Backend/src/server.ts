import express, { Request, Response} from "express";
import {getDataAtInterval, storeDataPoint} from "./time series/influx.controller";
import {verifyPassword} from "./sql/controllers/password.controller";
import {
    createReef,
    createUser,
    getUserById,
    getAllReefs,
    getReefById,
    removeReefById
} from "./sql/controllers/database.controller";
import cors from 'cors';

const app = express();
const port = 8080; //The port the API listens to
const ip = '0.0.0.0'; //Bind localhost to the outside
const prefix : string = "/api"; //Every call should begin with the API:PORT/Prefix

app.use(express.json()); //Tell express to parse json
app.use(cors()); //Tell express use CORS

/**
 * A test call to see if the API is running
 */
app.get(`${prefix}/test_call`, (req : Request, res : Response) => {
    console.log("Test incomming");
    try {
        res.status(200).json("API is running");
    } catch(error) {
        console.log(error);
        res.status(500).json("Something went wrong");
    }
})

/**
 * @deprecated
 * Get the humidity and temperature from the influxDB at a certain interval
 */
app.get(`${prefix}/retrieve_data`, async (req: Request, res: Response) => {
    try {
        const interval : string = req.query.interval as string;
        const data = await getDataAtInterval(interval);
        if(data != null) {
            res.status(200).json(data);
            return;
        } else {
            res.status(500).json("Something went wrong");
            return;
        }
    } catch(error) {
        console.error('An error occurred: ', error);
        res.status(500).json("An error occurred");
    }
});

/**
 * Get all the reefs stored in the MySQL database
 */
app.get(`${prefix}/retrieve_reefs`, async(req: Request, res: Response) => {
    try {
        const data = await getAllReefs();
        if(data != null) {
            res.status(200).json(data);
            return
        } else {
            res.status(500).json("Something went wrong");
            return;
        }
    } catch(error) {
        console.error("An error occureed: ", error);
        res.status(500).json("an error occurred");
    }
});

/**
 * Get a single Reef according to its ID
 */
app.post(`${prefix}/retrieve_reef`, async(req: Request, res: Response) => {
    try {
        const data = await getReefById(req.body.id);
        if(data != null) {
            res.status(200).json(data);
            return;
        } else {
            res.status(500).json("Something went wrong");
            return
        }
    } catch(error) {
        console.error("An error occurred: ", error);
        res.status(500).json('An error occurred');
    }
});

/**
 * Delete a reef according to the given ID
 */
app.post(`${prefix}/remove_reef`, async(req: Request, res: Response) => {
    try {
        console.log(req.body);
        const result = await removeReefById(req.body.id);
        if(result) {
            res.status(200).send(`Reef with id ${req.body.id} has been deleted`);
            return;
        } else {
            res.status(500).send(`Reef with id ${req.body.id} could not be deleted`);
            return;   
        }
    } catch(error) {
        console.error("An error occurred: ", error);
        res.status(500).json('An error occurred');
    }
})

/**
 * Store the given data from the sensors to the InfluxDB
 */
app.post(`${prefix}/store_data`, (req: Request, res: Response)=> {
    try {
        if(storeDataPoint(req.body)) {
            res.status(200).send("Data has been stored");
            return;
        } else {
            res.status(400).send("Data has been stored");
            return;
        }
    } catch(error) {
        console.error('An error occurred: ', error);
        res.status(500).send(`An error occurred: ${error}`);
    }
});

/**
 * Validate the given password to the stored password
 */
app.post(`${prefix}/check_login_attempt`, async (req: Request, res: Response) => {
    try {
        let checked: Boolean = false;
        console.log(req.body);
        const result = await getUserById(req.body.username);
        console.log(result);
        for(const row of result as unknown as any[]) {
            console.log(row.password);
            checked = await verifyPassword(req.body.password, row.password);
        }
        if(checked) {
            console.log("Sending success");
            res.status(200).json("success");
            return;
        } else {
            console.log("Sending failed");
            res.status(403).json("failed");
            return;
        }
    } catch(error) {
        console.log(error);
        res.status(500).json("Something went wrong");
    }
});

/**
 * Create a new user with an email, password and role and insert it into the MySQL database
 */
app.post(`${prefix}/create_user`, async (req: Request, res: Response) => {
    try {
        const result = await createUser(req.body.email, req.body.password, req.body.role);
        if(result) {
            res.status(200).json("success");
            return;
        } else {
            res.status(403).json("failed");
            return;
        }
    } catch(error) {
        console.error(error)
        res.status(500).json("Something went wrong");
    }
});

/**
 * Store a new reef into the MySQL database with a name, location and if it is active
 */
app.post(`${prefix}/create_reef`, async (req: Request, res: Response)=> {
    console.log("Incomming request to create a new reef");
    try {
        const active = req.body.active == 1;
        console.log(req.body);
        const result = await createReef(req.body.name, req.body.location, active);
        if(result) {
            res.status(200).json("success");
            return;
        } else {
            res.status(403).json("failed");
            return;
        }
    } catch(error) {
        console.error(error);
        res.status(500).json("Something went wrong");
    }
});

/**
 * Launch the express server with the given port and IP.
 * In this case, the IP is the IP of the server it is hosted on.
 */
app.listen(port, ip, () => {
    console.log(`The API is listening on url: 145.24.222.136:${port}`);
});