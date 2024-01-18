import { randomUUID } from "crypto";
import { ITodo, PriorityType } from "./interfaces";
import { Description } from "./value_objects/description";
import { Title } from "./value_objects/title";
import { Replace } from "src/helpers/replace";

export class Todo {

    private props: ITodo

    constructor(props: Replace<ITodo,{ 
        id?: string
        createdAt?: Date 
    }>){

        this.props = {
            ...props,
            id: props.id ?? randomUUID(),
            createdAt: props.createdAt ?? new Date()
        }

    }

    get id(){

        return this.props.id

    }

    get title(){

        return this.props.title;

    }

    set title(title: Title){

        this.props.title = title;

    }

    get description(){

        return this.props.description;

    }

    set description(description: Description){

        this.props.description = description;

    }

    get finishedIn(){

        return this.props.finishedIn;

    }

    set finishedIn(finishedIn: Date){

        this.props.finishedIn = finishedIn;

    }

    get priority(){

        return this.props.priority;

    }

    set priority(priority: PriorityType){

        this.props.priority = priority;

    }

    get userId(){

        return this.props.userId;

    }

    get createdAt(){

        return this.props.createdAt;

    }

    get mustBeCompletedIn(){

        return this.props.mustBeCompletedIn;

    }

    set mustBeCompletedIn(mustBeCompletedIn: Date){

        this.props.mustBeCompletedIn = mustBeCompletedIn;

    }


}