import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services";
import genre from "../../components/Genre/Genre";


const initialState = {
    genres: [],
}


const getAll = createAsyncThunk(
    'genresSlice/getAll',
    async () => {
        const {data} = await genresService.getAll()
        return data
    }
)



const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genres = genres
                console.log(genres)
            })
    }
})

const {reducer: genresReducer} = genresSlice

const genresActions = {
    getAll
}

export {
    genresReducer,
    genresActions
}