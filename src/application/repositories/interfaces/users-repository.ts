import { User } from "src/application/entities/users/user";


export abstract class UsersRepository {

    abstract create(user: User): Promise<void>
    // abstract delete(userId: string): Promise<void>
    // abstract findById(userId: string): Promise<User| null>
    // abstract save(user: User): Promise<void>
}