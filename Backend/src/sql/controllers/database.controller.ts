import mysql, { ConnectionOptions } from 'mysql2/promise';
import * as queries from "../queries";
import * as passwordController from './password.controller';

/**
 * The credentials for the database
 */
const access: ConnectionOptions = {
    host: "db",
    user: "urban-admin",
    password: "welcome12345",
    database: "db",
    waitForConnections: true, //The database waits for the connection
    connectionLimit: 10, //A max of 10 connection can be made
    queueLimit: 0
};

/**
 * Create a pool connection to the database. This way, more then 1 connection get be setup
 */
const conn = mysql.createPool(access);

/**
 * Retrieve all the users
 * @returns an array of users
 */
export async function getAllUsers() {
    try {
        const [rows, cols] = await conn.query(queries.getAllUsers);
        return rows;
    } catch(error) {
        throw error;
    }
}

/**
 * Get the user by the email
 * @param userEmail The email of the user to retrieve
 * @returns the user if found
 */
export async function getUserById(userEmail : string) {
    try {
        const [rows, cols] = await conn.query(queries.getUserByEmail, [userEmail]);
        return rows;
    } catch(error) {
        throw false;
    }
}

/**
 * Create a new user
 * @param userEmail the email of the new user
 * @param userPassword the password of the new user
 * @param role the role of the new user
 * @returns true if the user has been created, false if not
 */
export async function createUser(userEmail : string, userPassword : string, role : string) {
    try {
        const hashedPassword = await passwordController.hashPassword(userPassword);
        const [rows, cols] = await conn.query(queries.createUser, [userEmail, hashedPassword, role]);
        return true;
    } catch(error) {
        console.log(`An error occurred: ${error}`);
        return false;
    }
}

/**
 * Create a new Reef
 * @param name the name of the new reef
 * @param location the location of the new reef
 * @param active if the reef is active or not
 * @returns true if the reef has been created, false if not
 */
export async function createReef(name : string, location : string, active : boolean) {
    try {
        const [rows, cols] = await conn.query(queries.createReef, [name, location, active]);
        return true;
    } catch(error) {
        console.error(`An error occurred: ${error}`);
        return false;
    }
}

/**
 * Get all the reefs that are stored in the database
 * @returns All the reefs
 */
export async function getAllReefs() {
    try {
        const [rows, cols] = await conn.query(queries.getAllReefs);
        return rows;
    } catch(error) {
        throw error;
    }
}

/**
 * Get a reef by its ID
 * @param id the ID of the reef to get
 * @returns the reef if found
 */
export async function getReefById(id: number) {
    try {
        const [rows, cols] = await conn.query(queries.getReefById, [id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

/**
 * Get all the data stored in the data from all the reefs
 * @returns all the data from every reef
 */
export async function getAllDataFromReefs() {
    try {
        const [rows, cols] = await conn.query(queries.getAllDataFromEveryReef);
        return rows;
    } catch(error) {
        throw error;
    }
}

/**
 * Gets all the data from a single reef by its ID
 * @param reefId the ID of the reef
 * @returns all the data from the reef
 */
export async function getAllDataFromById(reefId: number) {
    try {
        const [rows, cols] = await conn.query(queries.getAllDataFromReefById, [reefId]);
        return rows;
    } catch(error) {
        throw error;
    }
}

/**
 * Deletes a reef from the database according to its ID
 * @param reefId the ID of the reef to delete
 * @returns A messsage saying that the reef is deleted or not
 */
export async function removeReefById(reefId: number) {
    try {
        const [rows, cols] = await conn.query(queries.deleteReefAtId, [reefId]);
        return rows;
    } catch(error) {
        throw error;
    }
}