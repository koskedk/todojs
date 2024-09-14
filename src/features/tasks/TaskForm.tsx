import React, { useState } from "react";
import { NewTask } from "./model/task";

interface Props {
    onSave: (t: NewTask) => void
}

const TaskForm = ({ onSave }: Props) => {
    const [name, setName] = useState('');
    const onNameChange = (e: any) => {
        setName(e.target.value)
    }
    const handlSave = () => {
        onSave({ name })
        setName('')
    }
    
    
    return (
        <div>
            <label htmlFor="name">Task</label>
            <input type="text" id="name" name="name" value={name} onChange={onNameChange}></input>
            <button onClick={handlSave}>Save</button>
        </div>
    )
}

export default TaskForm