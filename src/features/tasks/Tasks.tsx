import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { CompleteTask, DeleteTask, NewTask } from "./model/task";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTask, completeTask, deleteTask } from "./+state/task.slice";
import { selectTasks } from "../counter/+state/counter.slice";


const Tasks = () => {
    const tasks = selectTasks
    const dispatch = useAppDispatch();

    const handleCreate = (t: NewTask) => {
        dispatch(addTask(t))
    }
    const handleComplete = (t: CompleteTask) => {
        dispatch(completeTask(t))
    }
    const handleDelete = (t: DeleteTask) => {
        dispatch(deleteTask(t))
    }
    
    return (
        <div>
            <h4>My Tasks {tasks.length}</h4>
            <TaskForm onSave={handleCreate} />
            <TaskList tasks={tasks} onComplete={handleComplete} onDelete={handleDelete} />
        </div>
    )
}

export default Tasks