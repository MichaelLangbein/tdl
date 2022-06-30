import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BackendClient, Task, Tree } from "../svc/backendClient";



const dbClient = new BackendClient('http://localhost:3001');

const rootTask: Task = {
    title: 'title',
    description: 'description'
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


export const downloadData = createAsyncThunk('TaskTree/downloadData', async (args, api) => {
    return await dbClient.getTree();
});

export const uploadData = createAsyncThunk('TaskTree/uploadData', async (tree: Tree<Task>, api) => {
    return await dbClient.setTree(tree);
});


const slice = createSlice({
    name: 'TaskTree',
    initialState: initialState,
    reducers: {
        
        "taskEdit": (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                activeTask: action.payload
            }
        }
    },
    extraReducers: {
        [downloadData.pending.toString()]: (state, action) => {
            return {
                ...state,
                activeTask: {
                    ...state.activeTask,
                    title: '...'
                }
            }
        },
        [downloadData.fulfilled.toString()]: (state, action) => {
            return {
                ...state,
                tree: action.payload,
                activeTask: action.payload.data
            }
        },
        [uploadData.pending.toString()]: (state, action) => {
            return state;
        },
        [uploadData.fulfilled.toString()]: (state, action) => {
            return state;
        }
    }
});

export const taskTreeReducer = slice.reducer;
export const { taskEdit } = slice.actions;
