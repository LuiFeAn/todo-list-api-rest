import { Email } from "./email";

describe('User email tests', () => {

    it('should create a email', () => {

        const username = new Email('luisfernando@gmail.com');
    
        expect(username).toBeTruthy();
    
    });
    
    
    it('should not create an email if it does not have a valid format', () => {
    
        expect( () => new Email('luisfernandogmail.com')).toThrow('Invalid email');
    
    });


});
