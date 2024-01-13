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

        return this.username

    }

    get id(){

        return this.id;

    }

    set username(username: Username){

        this.username = username;

    }

    get password(){

        return this.password

    }

    set password(password: Password){
        
        this.password = password;
        
    }

    get email(){

        return this.email

    }

    set email(email: Email){

        this.email = email;

    }

    get createdAt(){

        return this.createdAt;

    }

    get todoList(){

        return this.todoList;

    }

}