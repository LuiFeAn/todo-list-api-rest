import { Todo } from "src/application/entities/todos/todo"
import { TodoList } from "@prisma/client"
import { Title } from "src/application/entities/todos/value_objects/title"
import { Description } from "src/application/entities/todos/value_objects/description"

export class PrismaTodoMapper {

    static toPrisma(todo: Todo){

        return {
            id: todo.id,
            title: todo.title.value,
            description: todo.description.value,
            priority: todo.priority,
            mustBeCompletedIn: todo.mustBeCompletedIn,
            createdAt: todo.createdAt,
            finishedIn: todo.finishedIn,
            userId: todo.userId,
        }

    }

    static toDomain(todo: TodoList){

        return new Todo({
            id: todo.id,
            title: new Title(todo.title),
            description: new Description(todo.description),
            priority: todo.priority,
            mustBeCompletedIn: todo.mustBeCompletedIn,
            userId: todo.userId,
            finishedIn: todo.finishedIn,
            createdAt: todo.createdAt,
        })        

    }

}