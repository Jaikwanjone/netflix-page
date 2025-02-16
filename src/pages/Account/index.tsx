import { UserAuth } from "../../context/AuthContext";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div className=" bg-[#131111] w-screen h-screen pt-20">
      <div>
        <div className="flex items-center md:justify-center justify-between  mt-10 mb-5">
          <div className=" w-[100px]  md:w-[200px] md:mr-[80px] ">
            <img
              className="w-full rounded-se-2xl rounded-bl-2xl "
              src="/Netflix-Profile.jpg"
              alt="Profile"
            />
          </div>
          <span className=" sm:hidden"></span>
          <div className=" md:text-[20px] font-bold">
            <p>
              Your Email : <span className=" text-red-500"> {user?.email}</span>
            </p>
            <p>
              Your ID : <span className=" text-red-500">{user?.uid}</span>
            </p>
          </div>
        </div>
        <div className=" w-full h-2 bg-[#232323] relative"></div>
        <div>
          <h2 className="text-white font-bold md:text-xl pl-4 my-5">
            Saved Movies
          </h2>

          <div>comming Soon ...</div>
        </div>
      </div>
    </div>
  );
};
export default Account;
