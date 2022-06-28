import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Reducers<S, A> = {
    sync: {
        [key: string]: (state: S, action: A) => void
    },
    async: {
        [key: string]: {
            loader: (args: any) => Promise<any>,
            resolvedReducer: (state: S, action: A) => void,
            pendingReducer?: (state: S, action: A) => void,
            errorReducer?: (state: S, action: A) => void
        }
    }
}

export type createReducerArgs<S, A> = {
    name: string,
    initialState: S,
    reducers: Reducers<S, A>
};


export function createReducer<S, A>(args: createReducerArgs<S, A>) {
    const {name, initialState, reducers} = args;

    const loaderActions: {[key: string]: AsyncThunk<any, any, {}>} = {};
    for (const key in reducers.async) {
        const loader = reducers.async[key].loader;
        const thunk = createAsyncThunk(`${name}/${key}`, loader);
        loaderActions[key] = thunk;
    }

    const slice = createSlice({
        name: name,
        initialState: initialState,
        reducers: reducers.sync as any,
        extraReducers(builder) {
            for (const key in reducers.async) {    
                const {loader, pendingReducer, resolvedReducer, errorReducer} = reducers.async[key];
                const thunk = loaderActions[key];
                builder.addCase(thunk.fulfilled, resolvedReducer as any);
                if (pendingReducer) builder.addCase(thunk.pending, pendingReducer as any);
                if (errorReducer) builder.addCase(thunk.rejected, errorReducer as any);
            }
        }
    });

    return {
        reducer: slice.reducer,
        actions: slice.actions,
        loaderActions: loaderActions,
    }
}