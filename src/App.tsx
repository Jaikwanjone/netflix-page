import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectRoute from "./components/ProtectRoute";
import AuthContextProvider from "./context/AuthContext";
import "./index.css";
import Account from "./pages/Account";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import MoiveDetail from "./pages/Movie/[id]";
import NoUser from "./pages/NoUser";
import SignUp from "./pages/SignUp";
import { store } from "./store";
function App() {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <div className=" text-white ">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectRoute>
                  <Home />
                </ProtectRoute>
              }
            />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/nouser" element={<NoUser />} />
            <Route path="/movie/:id" element={<MoiveDetail />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </Provider>
    </AuthContextProvider>
  );
}

export default App;
