
export interface ICreateTodoRequest{

    title: string,
    description?: string,
    priority: "High" | "Medium" | "Low"
    userId: string,

}