import { Title } from "../value_objects/title"
import { Description } from "../value_objects/description"

export type PriorityType = "High" | "Medium" | "Low";

export interface ITodo {

    id: string
    title: Title,
    description?: Description | null,
    mustBeCompletedIn: Date,
    finishedIn?: Date | null,
    priority: PriorityType,
    createdAt: Date
    userId: string

}