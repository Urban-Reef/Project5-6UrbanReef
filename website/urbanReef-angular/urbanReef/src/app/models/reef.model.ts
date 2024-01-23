export class reef {
    id?:number = 0; 
    name:string = "";
    location:string = "";
    active:boolean = false;

    constructor(name:string, location:string, active:boolean, id?:number) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.active = active;
    }
}