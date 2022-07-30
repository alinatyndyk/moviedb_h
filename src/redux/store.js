import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices";

const rootReducer = combineReducers({
    movies: moviesReducer
})

const store = configureStore({
    reducer: rootReducer
})

export {
    store
}