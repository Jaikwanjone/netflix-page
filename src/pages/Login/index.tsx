import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
const LogIn = () => {
  const { LogIn } = UserAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await LogIn({ email, password });
      const access = await res.user.getIdToken();
      localStorage.setItem("NETFLIX", access);
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        setError(error.message);
      } else {
        console.log("Please check and try again");
        setError("Please check and try again");
      }
    }
  };
  const [show, setShow] = useState<Boolean>(false);
  // useEffect(() => {
  //   setShow(true);
  //   setTimeout(() => {
  //     setError("");
  //   }, 2000);
  // }, [error]);
  return (
    <>
      <div className=" w-full h-screen ">
        <img
          src="/cover.jpg"
          className="hidden sm:block absolute  w-full h-full object-cover"
          alt="cover image"
        />
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className=" fixed w-full px-4 py-24 z-50 ">
          <div className=" max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded ">
            <div className=" max-w-[320px] mx-auto py-16">
              <h1 className=" text-3xl font-bold text-center">Log IN</h1>
              <div className=" h-[40px] mt-1">
                {error ? (
                  <motion.p
                    className="p-2 h-full bg-red-400 rounded"
                    initial={{ opacity: 0, y: 20 }} // Start position (lower)
                    animate={{ opacity: 1, y: 0 }} // Move up and become visible
                    exit={{ opacity: 0, y: 20 }} // Move down and disappear
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
                    onAnimationComplete={() => {
                      setTimeout(() => setError(""), 2000);
                    }}
                  >
                    {error}
                  </motion.p>
                ) : (
                  <span className=" h-full"></span>
                )}
              </div>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-6"
              >
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
