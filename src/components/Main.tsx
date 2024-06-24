import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Request";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
const Main = () => {
  const [movies, setMovie] = useState<Movie[]>([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((Response) => {
      setMovie(Response.data.results);
    });
  }, []);
  const trancateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  if (!movies) return null;
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full ">
        <div className="w-full h-[550px] absolute bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover object-center"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold py-3 ">
            {movie?.title}
          </h1>
          <div className="my-2">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch later
            </button>
          </div>
          <p className="text-gray-300 text-sm">
            Released: {movie?.release_date as any}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {trancateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
