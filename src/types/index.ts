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
