import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, LogOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await LogOut();
      localStorage.removeItem("NETFLIX");
      navigate("/nouser");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex  items-center justify-between  py-4 md:px-[2rem] px-2 fixed w-full z-[100] border-b bg-[#1a1919]  border-b-[#1a1919] hover:bg-[#222f3338]">
      <Link to="/">
        <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
          NETFLIX
        </h1>
      </Link>

      {user?.email ? (
        <div className="flex flex-wrap">
          <Link to="/account">
            <button className="md:mx-2  py-1 pr-2 md:px-2">Account </button>
          </Link>
          <button
            onClick={handleLogOut}
            className=" bg-red-600 text-white py-1 md:px-[10px] rounded-[5px]"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap">
          <Link to="/login">
            <button className="md:mx-2  py-1 pr-2 md:px-2">Log In </button>
          </Link>
          <Link to="/signup">
            <button className=" bg-red-600 text-white py-1 md:px-[10px] rounded-[5px]">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
