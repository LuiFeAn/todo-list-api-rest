import { PriorityType } from "src/application/entities/todos/interfaces";

export interface IUpdateUserTodoRequest {

    id: string,
    title?: string,
    description?: string,
    mustBeCompletedIn?: Date,
    priority?: PriorityType
    userId: string,
    finishedIn?: Date,

}