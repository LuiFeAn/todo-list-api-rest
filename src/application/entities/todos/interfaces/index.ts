import { Title } from "../value_objects/title"
import { Description } from "../value_objects/description"
import { MustBeCompletedIn } from "../value_objects/must_be_completed_in"

export type PriorityType = "High" | "Medium" | "Low";

export interface ITodo {

    id: string
    title: Title,
    description?: Description | null,
    mustBeCompletedIn: MustBeCompletedIn,
    finishedIn?: Date | null,
    priority: PriorityType,
    createdAt: Date
    userId: string

}