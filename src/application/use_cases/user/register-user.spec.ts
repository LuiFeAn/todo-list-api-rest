import { RegisterUser } from "./register-user";
import { InMemoryUsersRepository } from "../../../tests/repositories/in-memory-users-repository";

describe('User register tests', () => {

    it('should register a new user', async () => {

        const inMemoryUsersRepository = new InMemoryUsersRepository();

        const registerUser = new RegisterUser(inMemoryUsersRepository);

        await registerUser.execute({
            username:'Luis Fernando',
            email:'luisfernando@gmail.com',
            password:'validPassword123'
        });

        expect(inMemoryUsersRepository.users).toHaveLength(1);
    
    });
    


});
