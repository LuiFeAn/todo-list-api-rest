import { User } from "src/application/entities/users/user";
import { UsersRepository } from "src/application/repositories/users-repository";


export class InMemoryUsersRepository implements UsersRepository {

    users: User[] = []

    async create(user: User){
        
        this.users.push(user);

    }

}