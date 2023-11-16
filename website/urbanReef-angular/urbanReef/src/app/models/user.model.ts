export class user {
    email:string = "";
    name:string = "";
    password:string = "";
    role:string = "";

    constructor(email:string, name:string, role:string){
        this.email = email;
        this.name = name;
        this.role = role;
        this.password = this.passGenerator();
    }

    private passGenerator():string {
        let outString: string = '';
        let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_-!';

        for (let i = 0; i < 5; i++) {
            outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
        }
        return outString;
    }
}