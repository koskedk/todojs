export interface Task {
    id: string
    name: string
    complete: boolean
    created: string
}

export type NewTask = Pick<Task, 'name'>

export type EditTask = Pick<Task, 'id' | 'name'>

export type CompleteTask = Pick<Task, 'id'>

export type DeleteTask=Pick<Task,'id'>