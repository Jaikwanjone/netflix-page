import { useNavigate } from "react-router-dom";
import Middle from "../../components/Middle";
import { UnderMiddle } from "../../components/UnderMiddle";

const NoUser = () => {
  const navigete = useNavigate();
  return (
    <div>
      <div className="w-full h-[700px]">
        <div className="w-full h-full">
          <div className="w-full h-[700px] absolute top-0 right-0 bg-black/80"></div>
          <img
            src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix-800x450.jpg"
            alt="cover image"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto px-3 py-4 w-full ">
          <h1 className=" md:text-5xl sm:text-3xl font-bold py-2 text-center ">
            Unlimited movies, TV shows, and more
          </h1>
          <p className=" text-center text-2xl my-5">
            Watch anywhere.Cancel Anytime
          </p>
          <p className=" text-center text-xl my-3">
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          <div>
            <div className="my-4 flex flex-col sm:flex-row justify-between items-center max-w-[600px] mx-auto ">
              <input
                type="email"
                placeholder="Email address"
                className="p-2 bg-black/45 w-full rounded-md h-[40px] text-xl py-7 px-2 border-2 border-[#2F2F2F] outline-red-800"
              />
              <button
                onClick={() => navigete("/signUp")}
                className="px-8 py-3 md:ml-3 w-[50%]  md:mt-0 mt-3 text-2xl shadow-blueBlur  bg-red-600 rounded"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Middle />
      <UnderMiddle />
    </div>
  );
};

export default NoUser;
