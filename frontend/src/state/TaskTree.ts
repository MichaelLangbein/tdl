import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BackendClient, Task, Tree } from "../svc/backendClient";



const dbClient = new BackendClient('http://localhost:3001');

const rootTask: Task = {
    title: '',
    description: ''
}

const tree: Tree<Task> = {
    id: 0,
    data: rootTask,
    children: []
}

const initialState = {
    tree: tree,
    activeTask: rootTask
};


export const loadData = createAsyncThunk('TaskTree/loadData', async (args, api) => {
    return await dbClient.getTree();
});


const slice = createSlice({
    name: 'TaskTree',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [loadData.pending.toString()]: (state, action) => {
            return {
                ...state,
                activeTask: {
                    ...state.activeTask,
                    title: '...'
                }
            }
        },
        [loadData.fulfilled.toString()]: (state, action) => {
            return {
                ...state,
                tree: action.payload,
                activeTask: action.payload.data
            }
        }
    }
});

export const taskTreeReducer = slice.reducer;
