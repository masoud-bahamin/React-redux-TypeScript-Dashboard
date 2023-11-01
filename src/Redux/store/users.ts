import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async () => {
        const response = await fetch("https://redux-cms.iran.liara.run/api/users")
        const data = response.json()
        return data
    }
)

export const removeUser = createAsyncThunk(
    "users/removeUser",
    async (_id: string) => {
        const response = await fetch(`https://redux-cms.iran.liara.run/api/users/${_id}`, {
            method: "DELETE"
        })
        return response
    }
)

export const addUser = createAsyncThunk(
    "users/addUser"
    ,
    async (user: UserType) => {
        const response = await fetch("https://redux-cms.iran.liara.run/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        return response
    }
)

const initialState: UserInitialState = {
    data: [],
    loading: false,
    error: "",
    status: "none"
}

const slice = createSlice({
    name: "users",
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = "pending";
                state.loading = true;
                state.error = "";
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = "success";
                state.loading = false;
                state.data = action.payload;
                state.error = "";
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.data = [];
                state.error = action.error.message || "";
                state.loading = false;
                state.status = "rejected";
            })
            .addCase(removeUser.pending, (state) => {
                state.status = "pending";
                state.error = "";
                state.loading = true;
            })
            .addCase(removeUser.fulfilled, (state, action) => {
                state.status = "success";
                state.error = "";
                state.loading = false;
                state.data = [...state.data].filter(user => user._id !== action.meta.arg);
            })
            .addCase(removeUser.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error.message || ""
                state.loading = false;
            })
            .addCase(addUser.pending, (state) => {
                state.status = "pending";
                state.error = "";
                state.loading = true;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.status = "success";
                state.error = "";
                state.loading = false;
                state.data = [...state.data , action.meta.arg];
            })
            .addCase(addUser.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error.message || ""
                state.loading = false;
            })
    }
})

export default slice.reducer