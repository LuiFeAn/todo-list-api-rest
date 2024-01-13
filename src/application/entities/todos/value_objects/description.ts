

export class Description {

    private readonly description: string

    constructor(description: string){

        if( !this.validateDescriptionLenght(description) ){

            throw new Error('The description must have a maximum of 5000 characters');

        }

        this.description = description;

    }

    get value(){

        return this.description;

    }

    private validateDescriptionLenght(description: string){

        return (
            description.length >= 0 && description.length <= 5000
        )

    }

}