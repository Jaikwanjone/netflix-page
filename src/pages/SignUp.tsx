import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async () => {};
  return (
    <>
      <div className=" w-full h-screen">
        <img
          src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix-800x450.jpg"
          className="hidden sm:block absolute  w-full h-full object-cover"
          alt="cover image"
        />
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className=" fixed w-full px-4 py-24 z-50">
          <div className=" max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded">
            <div className=" max-w-[320px] mx-auto py-16">
              <h1 className=" text-3xl font-bold text-center">Sign Up</h1>
              <form className="w-full flex flex-col py-6">
                <input
                  className="my-2 p-3 bg-gray-600 rounded "
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(evt) => setEmail(evt.target.value)}
                />
                <input
                  className="my-2 p-3 bg-gray-600 rounded "
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(evt) => setPassword(evt.target.value)}
                />
                <button className="bg-red-600 rounded font-bold py-3 my-6 transition-opacity duration-500 ease-in-out animate-pulse hover:scale-105">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-3">
                  <span className="text-gray-600 mr-2">
                    Already have an account?
                  </span>
                  <Link to="/login">Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
