import { createSlice } from "@reduxjs/toolkit";
//Initial State
const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: "",
}
export const blogSlice = createSlice({
    name : "blogs",
    initialState,
})