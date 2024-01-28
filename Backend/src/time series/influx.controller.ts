import * as Influx from '@influxdata/influxdb-client';
import {Point} from "@influxdata/influxdb-client";
import { HttpBody } from './HttpBody';

const influx = new Influx.InfluxDB({
    url: 'http://145.24.222.136:8086', //The url of InfluxDB
    token: 'wk3X0rZ4g6HVRSyv8MdDh7MN6NkZENR_JnLtncZRrsDonGNcYJLBg8HtzM072IIlvy5tC7T0MXEU5aKx0wyhJA==' //The Access Token that has been created for the API inside of InfluxDB
});

/**
 * Creates new datapoints and stores them into the InfluxDB Bucket
 * @param body The body which holds the data to be stored
 * @returns true if success and false if not
 * @see HttpBody
 */
export function storeDataPoint(body: HttpBody) : boolean {
    const writeApi = influx.getWriteApi('Urban Reef', 'Reefs'); //Create a new WriteAPI
    const dataPoints : Point = new Point('sensor_data') //Create a new datapoint called sensor_data
        .tag('location', body.location.toLowerCase()) //Cast the location to lowercase
        .timestamp(new Date()); //Add a timestamp
        //http://145.24.222.136:8086/orgs/d0ee3cfafdba1021/data-explorer?fluxScriptEditor
    
        /**
         * Add new floatFields to the datapoint if they are present in the body.
         * If you want to extend this, add more else if statements in the same way as the others.
         * Also don't forget to edit the HttpBody
         */
    if(body.temperature1 !== undefined && body.humidity1 !== undefined) {
        dataPoints.floatField('temperature1', body.temperature1)
                  .floatField('humidity1', body.humidity1);
    } else if(body.temperature2 !== undefined && body.humidity2 !== undefined) {
        dataPoints.floatField('temperature2', body.temperature2)
                  .floatField('humidity2', body.humidity2);
    } else if(body.temperature3 !== undefined && body.humidity3 !== undefined) {
        dataPoints.floatField('temperature3', body.temperature3)
                  .floatField('humidity3', body.humidity3);
    }else if(body.temperature4 !== undefined && body.humidity4 !== undefined) {
        dataPoints.floatField('temperature4', body.temperature4)
                  .floatField('humidity4', body.humidity4);
    }else if(body.temperature5 !== undefined && body.humidity5 !== undefined) {
        dataPoints.floatField('temperature5', body.temperature5)
                  .floatField('humidity5', body.humidity5);
    }else if(body.temperature6 !== undefined && body.humidity6 !== undefined) {
        dataPoints.floatField('temperature6', body.temperature6)
                  .floatField('humidity6', body.humidity6);
    } else {
        console.error("Invalid body");
        return false;
    }

    writeApi.writePoint(dataPoints); //Send the datapoint to the Bucket

    writeApi
        .close() //Close the API for safety
        .then(() => {
            return true; //The data is successfully stored
        })
        .catch((error) => {
            console.error('Error inserting data point:', error);
            return false; //Something went wrong and the data has not been stored.
        });
    return false;
}

/**
 * @deprecated
 * Get the data from the Bucket at a certain interval and send it back to the client. This function is not being used
 * @param interval The interval that will be used to retrieve the data
 * @returns The data it has retrieved or null if there is no data
 */
export async function getDataAtInterval(interval: string) {

    //The query that retrieves the humidity and temperature from the bucket Reefs at a certain interval
    const query = `
            from(bucket: "Reefs")
              |> range(start: -${interval})
              |> filter(fn: (r) => r["_measurement"] == "sensor_data" and r["_field"] == "temperature" or r["_field"] == "humidity")
              |> last()`;

    const queryApi = influx.getQueryApi('UrbanReef'); //Create new Query API
    const result: QueryResult[] = await queryApi.collectRows(query); //Use the API to call the above declared query

    //Map the data into a new object with time, field and value
    const data = result.map((row) => ({
        time: row._time,
        field: row._field,
        value: row._value,
    }));

    console.log(data);

    //If there is any data return it, otherwise return null
    if(data.length > 0) {
        return data;
    } else {
        return null;
    }
}

//The object used for retrieving data from InfluxDB
interface QueryResult {
    _time: string;
    _field: number;
    _value: number;
}