export class Reef {
    reefName:string ="";
    image:string = "";
    humidity:string = "";
    temperture:string = "";

    constructor (reefname:string,image:string,humidity:string,temperature:string) {
        this.reefName = reefname;
        this.image = image;
        this.humidity = humidity;
        this.temperture = temperature;
    }
}