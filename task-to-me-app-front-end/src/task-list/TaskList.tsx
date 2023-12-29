import {getAllTasks} from "../services/taskservices.tsx";
import {useInsertionEffect} from "react";
import {useTaskDispatcher, useTaskList} from "../context/TaskContext.tsx";
import {useUser} from "../context/UserContext.tsx";
import {Task} from "../task/Task.tsx";
export function TaskList() {

    const taskList = useTaskList();
    const taskDispatcher = useTaskDispatcher();
    const user = useUser();

    useInsertionEffect(() => {
        getAllTasks(user!.email!).then(taskList => {
            taskDispatcher({type: 'set-list', taskList});
        }).catch(err => {
            alert("Failed to load tasks");
        })
        return ()=>{
            taskDispatcher({type: 'set-list', taskList: []});
        }
    }, []);
    return (
        <>
            {taskList.map(task =>
            <Task key={task.id}{...task} />
            )}
        </>
    );
}