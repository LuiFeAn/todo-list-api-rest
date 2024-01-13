import { Title } from "./title";

describe('Todo title tests', () => {

    it('should create a title', () => {

        const title = new Title('Creating restful API');
    
        expect(title).toBeTruthy();
    
    });
    
    
    it('should not create a title if there are more than 100 characters', () => {
    
        expect( () => new Title('Creating restful'.repeat(200))).toThrow('The title must have a maximum of 100 characters');
    
    });


});
