import { randomUUID } from "crypto";
import { CreateTodo } from "./create-todo";
import { InMemoryTodoRepository } from "../../../../tests/repositories/in-memory-todos-repository";
import { positiveDate } from "../../../helpers/date-generator";

describe('Todo creation tests', () => {

    it('should create a new todo', async () => {

        const todosRepository = new InMemoryTodoRepository();

        const createTodo = new CreateTodo(todosRepository);

        await createTodo.execute({
            title:'A new todo',
            description:'...',
            priority:'Medium',
            userId: randomUUID(),
            mustBeCompletedIn: positiveDate()
        });

        expect(todosRepository.todos).toHaveLength(1);
    
    });


});
