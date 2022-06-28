import { BackendClient, Task, Tree } from "../svc/backendClient";
import { createReducer } from "./reduxUtils";



const dbClient = new BackendClient('http://localhost:3001');

const rootTask: Task = {
    title: 'root',
    description: ''
}

const tree: Tree<Task> = {
    data: rootTask,
    children: []
}

const initialState = {
    tree: tree,
    activeTask: rootTask
};



const {reducer, actions, loaderActions} = createReducer({
    name: 'TaskTree',
    initialState: initialState,
    reducers: {
        sync: {},
        async: {
            'loadData': {
                loader: async () => dbClient.getTree(),
                resolvedReducer: (state, action: any) => {
                    const tree = action.payload;
                    state.tree = tree;
                    state.activeTask = tree;  
                }
            }
        }
    }
});

export const taskTreeReducer = reducer;
export const { loadData } = loaderActions;