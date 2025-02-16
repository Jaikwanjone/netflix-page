import axios from "axios";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import requests from "../Request";
import { AppContext, UserAuth } from "../context/AuthContext";
import { MovieType as Movie, MovieType } from "../types";

const Main = () => {
  const navigate = useNavigate();
  const [movies, setMovie] = useState<Movie[]>([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const { user } = UserAuth();
  const { Movies } = useContext(AppContext);
  useEffect(() => {
    axios.get(requests.requestPopular).then((Response) => {
      // setMovie(Response.data.results);
      movies.unshift(...Response.data.results);
    });
    axios.get(requests.requestTopRated).then((Response) => {
      // setMovie(Response.data.results);
      movies.unshift(...Response.data.results);
    });
    axios.get(requests.requestTrending).then((Response) => {
      // setMovie(Response.data.results);
      movies.unshift(...Response.data.results);
    });
    axios.get(requests.requestHorror).then((Response) => {
      // setMovie(Response.data.results);
      movies.unshift(...Response.data.results);
    });
    axios.get(requests.requestUpcoming).then((Response) => {
      // setMovie(Response.data.results);
      movies.unshift(...Response.data.results);
    });
  }, []);
  Movies.push(...movies);

  const trancateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const movieId = doc(db, "users", `${user?.email}`);
  const movieData = {
    id: movie?.id,
    title: movie?.title,
    img: movie?.backdrop_path,
  };

  const saveShow = async () => {
    const docSnapshot = await getDoc(movieId);
    const savedShows = docSnapshot.exists()
      ? docSnapshot.data().savedShows || []
      : [];
    const isSaved = savedShows.some((show: MovieType) => show.id === movie.id);
    if (isSaved) {
      // If the movie is already saved, remove it
      await updateDoc(movieId, {
        savedShows: arrayRemove(movieData),
      });
    } else {
      await updateDoc(movieId, {
        savedShows: arrayUnion(movieData),
      });
    }
  };
  if (!movies) return <p>Loading</p>;
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
            <button
              onClick={() => navigate(`/movie/${String(movie?.id)}`)}
              className="border bg-gray-300 text-black border-gray-300 py-2 px-5 transition-transform duration-300 hover:scale-110 hover:z-20 "
            >
              Play
            </button>
            <button
              onClick={saveShow}
              className="border text-white border-gray-300 py-2 px-5 ml-4 transition-transform duration-300 hover:scale-110 hover:z-20"
            >
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
