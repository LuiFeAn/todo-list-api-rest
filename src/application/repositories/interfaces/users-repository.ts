import { User } from "../../entities/users/user";

export abstract class UsersRepository {

    abstract create(user: User): Promise<void>
    abstract findByEmail(email: string): Promise<User>
    abstract updatePassword(newPassword: string,userId: string): Promise<void>
    abstract findById(userId: string): Promise<User>
    
}