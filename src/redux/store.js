import { configureStore } from '@reduxjs/toolkit'
import blogSliceReducer from './features/blogs/blogsSlice'
export const store = configureStore({
  reducer: {
    blogs: blogSliceReducer
  },
})