export class user {
    email:string = "";
    name:string = "";
    password:string = "";
    role:string = "";

    constructor(email:string, name:string, role:string, password:string){
        this.email = email;
        this.name = name;
        this.role = role;
        this.password = password;
    }

}