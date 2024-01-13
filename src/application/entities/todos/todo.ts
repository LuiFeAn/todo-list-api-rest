import { randomUUID } from "crypto";
import { ITodo } from "./interfaces";
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
            id: randomUUID(),
            createdAt: props.createdAt ?? new Date()
        }

    }

    get id(){

        return this.id

    }

    get title(){

        return this.title;

    }

    set title(title: Title){

        this.title = title;

    }

    get description(){

        return this.description;

    }

    set description(description: Description){

        this.description = description;

    }

    get finishedIn(){

        return this.finishedIn;

    }

    get priority(){

        return this.priority;

    }

    set priority(priority: "High" | "Medium" | "Low"){

        this.priority = priority;

    }

    get userId(){

        return this.userId;

    }

    get createdAt(){

        return this.createdAt;

    }


}