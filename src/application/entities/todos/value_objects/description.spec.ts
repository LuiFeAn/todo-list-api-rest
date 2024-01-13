import { Description } from "./description";

describe('Todo description tests', () => {

    it('should create a description', () => {

        const description = new Description('Make a restful API for technical testing');
    
        expect(description).toBeTruthy();
    
    });
    
    
    it('should not create a description if there are more than 5000 characters', () => {
    
        expect( () => new Description('Make a restful'.repeat(6000))).toThrow('The description must have a maximum of 5000 characters');
    
    });


});
