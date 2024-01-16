

export class Title {

    private readonly title: string

    constructor(title: string){

        if( !this.validateTitleLenght(title) ){

            throw new Error('The title must have a maximum of 100 characters');

        }

        this.title = title.trim();

    }

    get value(){

        return this.title;

    }

    private validateTitleLenght(description: string){

        return (
            description.length >= 0 && description.length <= 500
        )

    }

}