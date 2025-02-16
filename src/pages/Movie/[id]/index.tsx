import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../context/AuthContext";

const MoiveDetail = () => {
  const { id } = useParams();
  const { Movies } = useContext(AppContext);
  const movie = Movies.find((item) => item.id === Number(id));
  return <div>{movie?.title}</div>;
};
export default MoiveDetail;
