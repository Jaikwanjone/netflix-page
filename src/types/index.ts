import { User } from "firebase/auth";

// export interface appSlices {
//   items: Movie[];
//   isLoading: boolean;
//   error: Error | null;
// }

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}
export interface MovieType {
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
