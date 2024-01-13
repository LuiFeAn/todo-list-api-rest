import { User } from "src/application/entities/users/user";
import { UsersRepository } from "src/application/repositories/users-repository";


export class InMemoryUsersRepository implements UsersRepository {

    users: User[] = []

    async create(user: User){
        
        this.users.push(user);

    }

    async findById(userId: string){
        
        const user = this.users.find( user => (
            user.id === userId
        ));

        return user;

    }

    async save(user: User){
        
        const userIndex = this.users.findIndex( user => (
            user.id == user.id
        ));

        if( userIndex >= 0 ){

            this.users[userIndex] = user;

        }

    }

    async delete(userId: string){

        const filtredUsers = this.users.filter( user => (
            user.id != userId
        ));

        this.users = filtredUsers;

    }

}