import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../../services";


const initialState ={
    page: null,
    movies: []
}

 const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ()=>{
        const {data} = await moviesService.getAll()
        return data
    }
)

 const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers:{},
     extraReducers:(builder) =>{
        builder
            .addCase(getAll.fulfilled, (state, action) =>{
                const {page, results} = action.payload;
                state.page = page
                state.movies = results
                console.log(results)
            })
     }
})

const {reducer:moviesReducer} = moviesSlice

const moviesActions = {
    getAll
}

export {
    moviesReducer,
    moviesActions
}