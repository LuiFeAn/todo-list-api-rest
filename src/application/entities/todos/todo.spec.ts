import { randomUUID } from "node:crypto";
import { Title } from "../todos/value_objects/title";
import { Description } from "../todos/value_objects/description";
import { Todo } from "../todos/todo";

describe('Todo creation tests', () => {

    it('should create a new todo class instance', () => {

        const todo =  new Todo({
            userId: randomUUID(),
            title: new Title('Creating restful API'),
            description: new Description('Make a restful API for technical testing'),
            priority: "High",
        })
    
        expect(todo).toBeTruthy();
    
    });


});