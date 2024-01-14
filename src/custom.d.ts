import IJwtDecode from "./infra/interfaces/jwt-decode"

declare global {

    interface Request {

        jwtDecode: IJwtDecode
        
    }

    namespace Express {

        interface Request {

            jwtDecode: IJwtDecode
            
        }

    }
}