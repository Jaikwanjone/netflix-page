import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  items-center justify-between  py-4 md:px-[2rem] px-2 absolute w-full z-[100]">
      <Link to="/">
        <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
          NETFLIX
        </h1>
      </Link>

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
    </div>
  );
};

export default Navbar;
