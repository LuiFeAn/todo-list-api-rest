
export class Password {

    private readonly password: string

    constructor(password: string){

        if( !this.validatePassword(password) ){

            throw new Error('Your password must have at least 8 characters, one capital letter and one number');

        }

        this.password = password;

    }

    get value(){

        return this.password;

    }

    private validatePassword(password: string): boolean {
        
        if (password.length< 8) {
            
            throw new Error('Password must have at least 8 characters')

        }
    
        if (!/[A-Z]/.test(password)) {
            
            throw new Error('Password must have at least one capital letter');

        }
    
        if (!/\d/.test(password)) {
            
            throw new Error('Password must have at least one letter and one number')

        }
    
        return true;

    }

}