import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./store/users.ts"
import courseReducer from "./store/courses.ts"

const store = configureStore({
    reducer: {
        Users: userReducer,
        Courses: courseReducer
    }
})

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store