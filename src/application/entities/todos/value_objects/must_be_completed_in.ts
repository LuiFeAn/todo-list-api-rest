

export class MustBeCompletedIn {

    private readonly mustBeCompletedIn: Date

    constructor(mustBeCompletedIn: Date){

        if( !this.validateMustBeCompletedIn(mustBeCompletedIn) ){

            throw new Error('Completion date precedes creation date')

        }

        this.mustBeCompletedIn = mustBeCompletedIn;

    }

    get value(){

        return this.mustBeCompletedIn;

    }

    private validateMustBeCompletedIn(mustBeCompletedIn: Date){

        const currentDate = new Date();

        return mustBeCompletedIn >= currentDate;

    }

}