import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Accounts from "./pages/Accounts";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className=" text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Accounts />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
