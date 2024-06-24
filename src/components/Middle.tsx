import { useRef } from "react";

const Middle = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <div>
      <div className=" w-full h-2 bg-[#232323] relative"></div>
      <div className="w-full h-[500px]">
        <div className="w-full h-full mx-auto md:flex justify-between  items-center block px-16 py-25 my-10">
          <div className="md:w-[40%] w-full sm:mx-auto">
            <h1 className="md:text-6xl font-bold sm:text-3xl text-xl text-white">
              Enjoy on your TV
            </h1>
            <p className="py-5 md:text-2xl text-xl ">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="md:w-[40%] w-full sm:mx-auto">
            {/* Video */}
            <video
              className="w-full  h-auto rounded-2xl hover:rounded-none inset-0 transition-all ease-in-out-4s"
              src="/netflix.mp4"
              autoPlay
              loop
              muted
              controls={false} // Disables the default controls
              onEnded={handleVideoEnded} // Repeats the video when it ends
            ></video>
          </div>
        </div>
      </div>
      <div className=" w-full h-2 bg-[#232323] relative"></div>
    </div>
  );
};

export default Middle;
