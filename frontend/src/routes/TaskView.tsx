import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../state/store';
import { taskEdit } from '../state/TaskTree';
import { useTaskData } from '../svc/hooks';

export default function TaskView() {
    const { activeTask } = useTaskData();
    const [title, setTitle] = useState(activeTask.title);
    const [description, setDescription] = useState(activeTask.description);



    return (
        <>
            <h2>Task view</h2>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} ></input>
            <input type="text" onChange={e => setDescription(e.target.value)} value={description} ></input>
            <button>Add subtask</button>
        </>
    );
}