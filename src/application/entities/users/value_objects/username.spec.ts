import { Username } from "./username";

describe('User username tests', () => {

    it('should create a name', () => {

        const username = new Username('Luis Fernando');
    
        expect(username).toBeTruthy();
    
    });
    
    
    it('should not create a name if it has less than 10 characters', () => {
    
        expect( () => new Username('Luis')).toThrow();
    
    });
    
    it('should not create a name if it is longer than 150 characters', () => {
    
        expect( () => new Username('Luis'.repeat(250))).toThrow();
    
    });

});
