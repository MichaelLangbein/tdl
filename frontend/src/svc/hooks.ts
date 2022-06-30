import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../state/store";
import { loadData } from "../state/TaskTree";


export function useTaskData() {
    const taskState = useAppSelector(state => state.taskTree);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadData());
    }, [dispatch]);
    return taskState;
}