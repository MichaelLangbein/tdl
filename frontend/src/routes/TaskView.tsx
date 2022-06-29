import axios from 'axios';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../state/store';
import { loadData } from '../state/TaskTree';

export default function TaskView() {
    const taskState = useAppSelector(state => state.taskTree);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('dispatching loadData ...')
        dispatch(loadData({}));
    }, []);

    return (
        <>
            <h2>Task view</h2>
            <h3>{taskState.activeTask.title}</h3>
            <p>{taskState.activeTask.description}</p>
        </>
    );
}