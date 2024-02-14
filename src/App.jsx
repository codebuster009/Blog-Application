import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Index";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {

  return (
    <>
    <Provider store = {store}>
    <div className="max-w-screen-xl mx-auto px-2">
      <div className="max-w-screen-xl mx-auto px-2">
    <Navbar/>
    </div>
    <Outlet/>
    <footer>Footer</footer>
    </div>
    </Provider>
    </>
  );
}

export default App;
