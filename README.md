# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


//REDUX
1) Setting up the Axios Instance baseURl in the file blogApi.js
    -here calling the api endpoint to get blogs , fn name is getBlogs

2) Creating blogSlice.js file
    -for slice we need to fist set Initial State
    -Async Thunk is where we call any apis
        -exported the getBlogs fn (see step 1)
3) Creating a blogReducer
    -name 
    -initial state
    -extraReducer
        -builder
        -addcase(state) {here changing the state based on the case}
            -handles 3 things pending , fullfilled , rejected cases
 Exported this blogSlice like blogSlice.reducer

 4) Importing this in the Store
    -using this inside the reducer object of store
    -reducer: {
        blogs: blogsSliceReducer
    }
5) Now we want to use the blogs data in our component(see a)
    -imported the getBlogs from the slice file
    -imported useDispatch
    -use useSelector hook to select the data from the slice file
    -useEffect to call the dispatch fn with fetchBlogs()
    -able to see the blogs data in console

//References
a)
UseSelector:
    -it is the replacement for the traditional mapStateToProps function used in class-based components. 
UseDispatch
    https://www.almabetter.com/bytes/tutorials/reactjs/hooks-in-redux