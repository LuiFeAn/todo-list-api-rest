
export class Email {

    private readonly email: string

    constructor(email: string){

        if( !this.validateEmail(email) ){

            throw new Error('Invalid email');

        }

        this.email = email;

    }

    get value(){

        return this.email;

    }

    private validateEmail(email: string){

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email);

    }

}