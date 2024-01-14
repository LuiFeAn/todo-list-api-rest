import { randomUUID } from "crypto";
import { IUser } from "./interfaces";
import { Email } from "./value_objects/email";
import { Password } from "./value_objects/password";
import { Username } from "./value_objects/username";
import { Replace } from "src/helpers/replace";

export class User {

    private props: IUser

    constructor(props: Replace<IUser,{
        id?: string 
        createdAt?: Date
    }>){

        this.props = {
            ...props,
            id: randomUUID(),
            createdAt: props.createdAt ?? new Date()
        }

    }

    get username(){

        return this.props.username;

    }

    get id(){

        return this.props.id

    }

    set username(username: Username){

        this.props.username = username;

    }

    get password(){

        return this.props.password

    }

    set password(password: Password){
        
        this.props.password = password;
        
    }

    get email(){

        return this.props.email

    }

    set email(email: Email){

        this.props.email = email;

    }

    get createdAt(){

        return this.props.createdAt;

    }

    get todoList(){

        return this.props.todoList;

    }

}