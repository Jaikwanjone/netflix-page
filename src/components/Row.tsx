import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AppContext } from "../context/AuthContext";
import Movie from "../pages/Movie";
import { MovieType as MovieE } from "../types";

interface Prop {
  title: string;
  fetchUrl: string;
  rowId: string;
}
export const Row = ({ title, fetchUrl, rowId }: Prop) => {
  const { Movies } = useContext(AppContext);

  const [movies, setMovies] = useState<MovieE[]>([]);
  useEffect(() => {
    axios.get(fetchUrl).then((Response) => {
      setMovies(Response.data.results);
    });
  }, [fetchUrl]);
  const slideLeft = () => {
    var slide = document.getElementById("slider" + rowId);

    if (slide) {
      // Scroll the slide element to the left by 500 pixels
      slide.scrollLeft = slide.scrollLeft - 500;
    }
  };
  const slideRight = () => {
    // Retrieve the element with the id 'slide'
    var slide = document.getElementById("slider" + rowId);

    // Check if the slide element exists
    if (slide) {
      // Scroll the slide element to the left by 500 pixels
      slide.scrollLeft = slide.scrollLeft + 500;
    }
  };

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl pl-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="absolute bg-white rounded-full left-0 opacity-0  text-black hover:opacity-100 cursor-pointer z-30 hidden group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="absolute bg-white rounded-full right-0 opacity-0 text-black hover:opacity-100 cursor-pointer z-30 hidden group-hover:block"
        />
      </div>
    </div>
  );
};
