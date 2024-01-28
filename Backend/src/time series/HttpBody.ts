/**
 * This body is used to declare which data can be expected when receiving it from the Sensor System.
 * If the Sensor System sends more types of data, add them to this list.
 */
export interface HttpBody {
    location: string;
    temperature1?: number;
    humidity1?: number;
    temperature2?: number;
    humidity2?: number;
    temperature3?: number;
    humidity3?: number;
    temperature4?: number;
    humidity4?: number;
    temperature5?: number;
    humidity5?: number;
    temperature6?: number;
    humidity6?: number;
}