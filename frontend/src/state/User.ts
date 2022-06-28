import { createReducer } from './reduxUtils';


// https://redux.js.org/tutorials/essentials/part-5-async-logic
// https://stackoverflow.com/questions/68812319/redux-toolkit-argument-of-type-asyncthunkaction-is-not-assignable-to-param 

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



const { reducer, actions, loaderActions } = createReducer({
    name: 'User', 
    initialState: {
        name: '',
        status: 'logged out'
    },
    reducers: {
        sync: {},
        async: {
            'login': {
                loader: async (password: string) => {
                    console.log('logging in with pw: ', password)
                    await sleep(1000);
                    const user = {
                        name: 'Michael'
                    };
                    return user;
                },
                pendingReducer: (state, _) => {
                    state.status = 'pending';
                },
                resolvedReducer: (state, action: any) => {
                    state.name = action.payload.name;
                    state.status = 'logged in';
                }
            },
            'logout': {
                loader: async() => {
                    await sleep(1000);
                    const user = {};
                    return user;
                },
                pendingReducer: (state, _) => {
                    state.status = 'pending';
                },
                resolvedReducer: (state, _) => {
                    state.name = '';
                    state.status = 'logged out';
                }
            }
        }
    }
});


export const userReducer = reducer;
export const { login, logout } = loaderActions;