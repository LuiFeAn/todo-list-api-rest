import { Title } from "../value_objects/title"
import { Description } from "../value_objects/description"

export interface ITodo {

    id: string
    title: Title,
    description?: Description | null,
    finishedIn?: Date | null,
    priority: "High" | "Medium" | "Low"
    createdAt: Date
    userId: string

}