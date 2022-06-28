import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// https://redux.js.org/tutorials/essentials/part-5-async-logic
// https://stackoverflow.com/questions/68812319/redux-toolkit-argument-of-type-asyncthunkaction-is-not-assignable-to-param 

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// a type of action; `dispatch(login("pass123"))`
export const login = createAsyncThunk('login', async (password: string) => {
    console.log('logging in with password', password);
    await sleep(1000);
    const user = {
        name: 'Michael'
    };
    return user;
});


// a type of action; `dispatch(logout())`
export const logout = createAsyncThunk('logout', async() => {
    await sleep(1000);
    const user = {};
    return user;
});

const userSlice = createSlice({
    name: 'User',
    initialState: {
        name: '',
        status: 'logged out'
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state, _) => {
                state.status = 'pending';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.name = action.payload.name;
                state.status = 'logged in';
            })
            .addCase(logout.pending, (state, _) => {
                state.status = 'pending';
            })
            .addCase(logout.fulfilled, (state, _) => {
                state.name = '';
                state.status = 'logged out';
            })
    }
});

export default userSlice.reducer;
