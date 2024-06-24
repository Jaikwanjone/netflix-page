import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LogIn = () => {
  const [show, setShow] = useState<Boolean>(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      <div className=" w-full h-screen ">
        <img
          src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix-800x450.jpg"
          className="hidden sm:block absolute  w-full h-full object-cover"
          alt="cover image"
        />
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className=" fixed w-full px-4 py-24 z-50 ">
          <div className=" max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded ">
            <div className=" max-w-[320px] mx-auto py-16">
              <h1 className=" text-3xl font-bold text-center">Log IN</h1>
              <form className="w-full flex flex-col py-6">
                <input
                  className="my-2 p-3 bg-gray-600 rounded "
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  className="my-2 p-3 bg-gray-600 rounded "
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 rounded font-bold py-3 my-6  transition-opacity duration-500 ease-in-out transform hover:scale-105 animate-pulse">
                  Log in
                </button>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2 cursor-pointer" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-3">
                  <span className="text-gray-600 mr-2">New to Netflix?</span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
