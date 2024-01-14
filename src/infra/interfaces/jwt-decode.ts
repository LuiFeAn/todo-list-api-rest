export default interface IJwtDecode {
    
    id: string,
    username: string,
    email: string,
    iat: number;
    exp: number;

}