export class reef {
    id:number = 0; 
    name:string = "";
    pictures:string[] = [];
    location:string = "";
    currentHumidity:number = 0;
    currentTemperature:number = 0; 

    constructor(id:number, name:string, pic:string[], location:string, humidity:number, temperature:number) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.currentHumidity = humidity;
        this.currentTemperature = temperature;
        this.pictures = pic;
    }
}