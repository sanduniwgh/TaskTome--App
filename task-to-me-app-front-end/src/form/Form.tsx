import './Form.css'
import {useUser} from "../context/UserContext.tsx";
import React, {useRef, useState} from "react";
import {TaskDTO} from "../dto/TaskDTO.ts";
import {saveTask} from "../services/taskservices.tsx";
import {useTaskDispatcher} from "../context/TaskContext.tsx";


export function Form() {

    const txtRef = useRef<HTMLInputElement>(null);
    const[value, setValue] = useState("");
    const taskDispatcher = useTaskDispatcher();
    const user = useUser();


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!value.trim()) return;
        saveTask(new TaskDTO(null, value, null, user?.email!))
            .then(task => {
                taskDispatcher({type: 'add', task});
                setValue("");
                txtRef.current!.focus();
            })
            .catch(err => {
                alert("Failed to save the task, try again!");
            });
    }

    return (
        <form onSubmit={handleSubmit}
              className="Form bg-body d-flex gap-1 p-2 border-bottom">
            <input className="form-control shadow-sm rounded-0"
                   ref={txtRef}
                   value={value}
                   onChange={e => setValue(e.target.value)}
                   placeholder="Eg. Finish react to-do app"
                   type="text"/>
            <button className="btn btn-primary shadow-sm rounded-0">ADD</button>
        </form>
    );
}