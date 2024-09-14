import React from "react";
import { CompleteTask, DeleteTask, Task } from "./model/task";

interface Props {
    tasks: Task[]
    onComplete: (id: CompleteTask) => void
    onDelete: (id: DeleteTask) => void
}

const TaskList = ({ tasks, onComplete, onDelete }: Props) => {
    return (
        <div>
            <ul>
                {tasks.map(t => <li
                    key={t.id}>{t.name}
                    <input type="checkbox" checked={t.complete} onChange={() => onComplete({ id: t.id })}></input>
                    <button onClick={() => onDelete({ id: t.id })} >X</button>
                </li>)}
            </ul>
        </div>
    )
}

export default TaskList