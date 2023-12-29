import './Form.css'
import {useUser} from "../context/UserContext.tsx";
import React, {useRef, useState} from "react";


export function Form() {

    const txtRef = useRef<HTMLInputElement>(null);
    const[value, setValue] = useState("");

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        if(value.trim()) return;


    }

    return (
        <form onSubmit={handleSubmit}
              className="Form bg-body d-flex gap-1 p-2 border-bottom">
            <input className="form-control shadow-sm rounded-0"
                   ref={txtRef}
                   value={value}
                   onChange={e => setValue(e.target.value)}
                   placeholder="Write your tasks here"
                   type="text"/>
            <button className="btn btn-primary shadow-sm rounded-0">ADD</button>
        </form>
    );
}