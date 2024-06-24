import {
  FcBiohazard,
  FcCustomerSupport,
  FcElectronics,
  FcPortraitMode,
} from "react-icons/fc";
const NewStyle = () => {
  const model = [
    {
      id: 1,
      title: "Stories tailored to your taste",
      icon: <FcBiohazard className=" absolute size-16 right-7 bottom-8 " />,
    },
    {
      id: 2,
      title: "Cancel or switch plans anytime",
      icon: (
        <FcCustomerSupport className=" absolute size-16 right-7 bottom-8 " />
      ),
    },
    {
      id: 3,
      title: "A place just for kids",
      icon: <FcElectronics className=" absolute size-16 right-7 bottom-8 " />,
    },
    {
      id: 4,
      title: "For your phone, tablet, laptop and TV",
      icon: <FcPortraitMode className=" absolute size-16 right-7 bottom-8 " />,
    },
  ];
  return (
    <div className="w-full h-[500px]">
      <div className="w-full h-full mx-20 my-6 py-5">
        <h1 className="md:text-2xl text-xl font-bold">More Reason to Join</h1>
        <div className="flex  ">
          {model.map((item) => (
            <div
              key={item.id}
              className="relative md:max-w-[320px] md:h-[360px] rounded-3xl w-full px-4 py-6 m-3 flex md:flex-col bg-[#1D182F] "
            >
              <h1 className=" text-3xl font-bold">{item.title}</h1>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewStyle;
