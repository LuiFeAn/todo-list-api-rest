import { Todo } from "src/application/entities/todos/todo"

export class TodoToHttpMapper {

    static toHttp(todo: Todo){
        
        return {
            id: todo.id,
            title: todo.title.value,
            description: todo.description.value,
            mustBeCompletedIn: todo.mustBeCompletedIn,
            finishedIn: todo.finishedIn,
            priority: todo.priority,
            createdAt:todo.createdAt,
            userId: todo.userId
        }

    }

}