import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../Firebase";
import { MovieType } from "../../types";
interface Prop {
  item: MovieType;
}
const Movie = ({ item }: Prop) => {
  const navigate = useNavigate();
  const [like, setLike] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const { user } = UserAuth();

  const movieId = doc(db, "users", `${user?.email}`);
  const movieData = {
    id: item.id,
    title: item.title,
    img: item.backdrop_path,
  };

  const saveShow = async () => {
    const docSnapshot = await getDoc(movieId);
    const savedShows = docSnapshot.exists()
      ? docSnapshot.data().savedShows || []
      : [];
    const isSaved = savedShows.some((show: MovieType) => show.id === item.id);
    if (isSaved) {
      // If the movie is already saved, remove it
      await updateDoc(movieId, {
        savedShows: arrayRemove(movieData),
      });
      setLike(false); // Update local state
      setSaved(false); // Update local state
    } else {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion(movieData),
      });
    }
  };
  // const saveShow = async () => {
  //   if (!user?.email) return; // Exit if user is not logged in

  //   setLike((prevLike) => !prevLike); // Toggle like state
  //   setSaved(true); // Set saved state to true

  //   const movieData = {
  //     id: item.id,
  //     title: item.title,
  //     img: item.backdrop_path,
  //   };

  //   await updateDoc(doc(db, "users", user.email), {
  //     savedShows: arrayUnion(movieData),
  //   });
  // };
  return (
    <div
      className="group w-[160px] sm:w-[200px] md:w-[340px] lg:w-[280px] inline-block cursor-pointer relative p-2  transition-transform duration-300 hover:scale-125 hover:z-20"
      key={item?.id}
    >
      <img
        className="w-full h-auto block  "
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100">
        <p
          onClick={() => navigate(`/movie/${String(item?.id)}`)}
          className="white-space-normal text-white text-xs md:text-sm font-bold flex justify-center items-center text-center h-full"
        >
          {item?.title}
        </p>
        <p onClick={saveShow}>
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

export default Movie;
