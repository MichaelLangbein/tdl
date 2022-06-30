import React, { ChangeEvent } from 'react';
import { useAppDispatch } from '../state/store';
import { taskEdit } from '../state/TaskTree';
import { useTaskData } from '../svc/hooks';

export default function TaskView() {
    const taskState = useTaskData();
    const dispatch = useAppDispatch();

    function setTitle(evt: ChangeEvent<HTMLInputElement>) {
        const task = taskState.activeTask;
        const newTask = {
            ...task,
            title: evt.target.value
        }
        dispatch(taskEdit(newTask));
    }
    function setBody(evt: ChangeEvent<HTMLInputElement>) {
        const task = taskState.activeTask;
        const newTask = {
            ...task,
            description: evt.target.value
        };
        dispatch(taskEdit(newTask));
    }


    return (
        <>
            <h2>Task view</h2>
            <input type="text" onChange={setTitle} value={taskState.activeTask.title} ></input>
            <input type="text" onChange={setBody} value={taskState.activeTask.description} ></input>
        </>
    );
}