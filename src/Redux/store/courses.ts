import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../servise/axios/axios";


export const getCourses = createAsyncThunk(
    "courses/getCourses"
    ,
    async () => {
        const { data } = await Axios("courses")
        return data
    }
)

export const addCourse = createAsyncThunk(
    "courses/addCourse"
    ,
    async (course: CourseType) => {
        const { data } = await Axios.post("courses", course)
        return data
    }
)

export const removeCourse = createAsyncThunk(
    "courses/removeCourse"
    ,
    async (_id : string)=> {
        const {data} = await Axios.delete(`courses/${_id}`)
        return data
    }
)

const initialState: CourseInitialState = {
    data: [],
    status: "none",
    loading: false,
    error: ""
}
const slice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCourses.pending, (state) => {
                state.loading = true;
                state.status = "pending";
                state.error = ""
            })
            .addCase(getCourses.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.status = "success";
                state.error = ""
            })
            .addCase(getCourses.rejected, (state, action) => {
                state.data = [];
                state.loading = false;
                state.status = "rejected";
                state.error = action.error.message || ""
            })
            .addCase(addCourse.pending, (state) => {
                state.status = "pending";
                state.error = ""
                state.loading = true
            })
            .addCase(addCourse.fulfilled, (state, action) => {
                state.data = [...state.data, action.meta.arg];
                state.loading = false;
                state.status = "success";
                state.error = ""
            })
            .addCase(addCourse.rejected, (state, action) => {
                state.loading = false;
                state.status = "rejected";
                state.error = action.error.message || ""
            })
            .addCase(removeCourse.pending, (state) => {
                state.status = "pending";
                state.error = ""
                state.loading = true
            })
            .addCase(removeCourse.fulfilled, (state, action) => {
                state.data = [...state.data].filter(course => course._id !== action.meta.arg);
                state.loading = false;
                state.status = "success";
                state.error = ""
            })
            .addCase(removeCourse.rejected, (state, action) => {
                state.loading = false;
                state.status = "rejected";
                state.error = action.error.message || ""
            })

    }
})

export default slice.reducer