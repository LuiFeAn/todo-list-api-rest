import { Password } from "./password";

describe('User password tests', () => {

    it('should create a password', () => {

        const password = new Password('validPassword123');
    
        expect(password).toBeTruthy();
    
    });
    
    
    it('should not create a password if it has less than 8 characters', () => {
    
        expect( () => new Password('invalid')).toThrow('Password must have at least 8 characters');
    
    });
    
    it('should not create a password if you do not have a number', () => {
    
        expect( () => new Password('invalidPassword')).toThrow('Password must have at least one letter and one number');
    
    });

    it('should not create a password if you do not have a capital letter', () => {
    
        expect( () => new Password('invalidpassword2')).toThrow('Password must have at least one capital letter');
    
    });

});
