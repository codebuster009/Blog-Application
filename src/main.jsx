import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login/Index.jsx";
import Register from "./Register/Index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ 
      path: "/" ,
      element: <Home/>,
  },
  {
    path: "/login",
    element : <Login/>
  },
  {
    path: "/register",
    element : <Register/>
  }
],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
