import { User } from "./user";
import { Email } from "./value_objects/email";
import { Password } from "./value_objects/password";
import { Username } from "./value_objects/username";

describe('User creation tests', () => {

    it('should create a new user class instance', () => {

        const username = new User({
            username: new Username('Luis Fernando'),
            email: new Email('luisfernando@gmail.com'),
            password: new Password('validPassword123')
        });
    
        expect(username).toBeTruthy();
    
    });


});
