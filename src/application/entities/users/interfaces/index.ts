import { Email } from "../value_objects/email"
import { Password } from "../value_objects/password"
import { Username } from "../value_objects/username"
import { Todo } from "../../todos/todo"

export interface IUser {

    id: string
    username: Username
    email: Email
    password: Password
    createdAt: Date
    todoList?:Todo[]

}