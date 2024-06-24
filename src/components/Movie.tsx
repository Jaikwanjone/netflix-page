import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Movie } from "./Main";
interface Prop {
  item: Movie;
}
const MovieE = ({ item }: Prop) => {
  const [like, setLike] = useState<boolean>(false);

  return (
    <div
      className="w-[160px] sm:w-[200px] md:w-[340px] lg:w-[280px] inline-block cursor-pointer relative p-2"
      key={item?.id}
    >
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100">
        <p className="white-space-normal text-white text-xs md:text-sm font-bold flex justify-center items-center text-center h-full">
          {" "}
          {item?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 tex-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 tex-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieE;
