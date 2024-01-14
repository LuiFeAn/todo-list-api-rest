import { Todo } from "src/application/entities/todos/todo"
import { TodoList } from "@prisma/client"
import { Title } from "src/application/entities/todos/value_objects/title"
import { Description } from "src/application/entities/todos/value_objects/description"
import { MustBeCompletedIn } from "src/application/entities/todos/value_objects/must_be_completed_in"

export class PrismaTodoMapper {

    static toPrisma(todo: Todo){

        return {
            id: todo.id,
            title: todo.title.value,
            description: todo.description.value,
            priority: todo.priority,
            mustBeCompletedIn: todo.mustBeCompletedIn.value,
            createdAt: todo.createdAt,
            userId: todo.userId,
        }

    }

    static toDomain(todo: TodoList){

        return new Todo({
            id: todo.id,
            title: new Title(todo.title),
            description: new Description(todo.description),
            priority: todo.priority,
            mustBeCompletedIn: new MustBeCompletedIn(todo.mustBeCompletedIn),
            userId: todo.userId,
            createdAt: todo.createdAt,
        })        

    }

}