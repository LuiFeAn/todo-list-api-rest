import { User } from "src/application/entities/users/user";


export abstract class UsersRepository {

    abstract create(user: User): Promise<void>
}