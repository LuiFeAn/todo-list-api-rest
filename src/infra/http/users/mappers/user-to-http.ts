import { User } from "src/application/entities/users/user"

export class UserToHttpMapper {

    static toHttp(user: User){
        
        return {
            username: user.username.value,
            password: user.password.value,
            email: user.email.value,
            createdAt: user.createdAt,
        }

    }

}