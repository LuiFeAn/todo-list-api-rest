import { PriorityType } from "src/application/entities/todos/interfaces";

export interface ICreateTodoRequest{

    title: string,
    description?: string,
    mustBeCompletedIn: Date,
    priority: PriorityType
    userId: string,

}