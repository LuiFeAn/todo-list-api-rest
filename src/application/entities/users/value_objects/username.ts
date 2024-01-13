
export class Username {

    private readonly username: string;

    constructor(username: string){
        
        if( !this.validateUsername(username) ){

            throw new Error('The username must be between 10 and 150 characters')

        }

        this.username = username;

    }

    get value(){

        return this.username;

    }

    private validateUsername(username: string){

        return username.length >= 10 && username.length <= 150;

    }

}