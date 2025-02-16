import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, db } from "../Firebase";
import { MovieType as Movie, MovieType } from "../types";
import axios from "axios";
import requests from "../Request";

interface Props {
  children: ReactNode;
}

interface UserCredentials {
  email: string;
  password: string;
}

interface AuthContextType {
  SignUp: ({ email, password }: UserCredentials) => Promise<UserCredential>;
  LogIn: ({ email, password }: UserCredentials) => Promise<UserCredential>;
  LogOut: () => Promise<void>;
  user: User | null; // ✅ Ensure the user type is 'User | null'
  Movies: Movie[];
}

/// ✅ Create Context with default value as 'undefined'
export const AppContext = createContext<AuthContextType>({
  SignUp: async () => {
    throw new Error("SignUp function not implemented");
  },
  LogIn: async () => {
    throw new Error("LogIn function not implemented");
  },
  LogOut: async () => {
    throw new Error("LogOut function not implemented");
  },
  user: null,
  Movies: [],
});

export function AuthContextProvider({ children }: Props) {
  //  Explicitly define state type as 'User | null'
  const [user, setUser] = useState<User | null>(null);
  const[Movies, SetMovies] = useState<MovieType[]>([])

  function SignUp({ email, password }: UserCredentials) {
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function LogIn({ email, password }: UserCredentials) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function LogOut() {
    return signOut(auth);
  }
  useEffect(() => {
    //  Fix missing dependency array and incorrect use of setUser
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // ✅ Now correctly assigns 'User | null'
    });

    return () => unsubscribe(); // ✅ Clean up listener
  }, []);
  useEffect(() => {
    axios.get(requests.requestPopular).then((Response) => {
      // setMovie(Response.data.results);
      Movies.push(...Response.data.results);
    });
    axios.get(requests.requestTopRated).then((Response) => {
      // setMovie(Response.data.results);
      Movies.push(...Response.data.results);
    });
    axios.get(requests.requestTrending).then((Response) => {
      // setMovie(Response.data.results);
      Movies.push(...Response.data.results);
    });
    axios.get(requests.requestHorror).then((Response) => {
      // setMovie(Response.data.results);
      Movies.push(...Response.data.results);
    });
    axios.get(requests.requestUpcoming).then((Response) => {
      // setMovie(Response.data.results);
      Movies.push(...Response.data.results);
    });
  }, []);

  return (
    <AppContext.Provider value={{ SignUp, LogIn, LogOut, user, Movies }}>
      {children}
    </AppContext.Provider>
  );
}

export default AuthContextProvider;
export function UserAuth() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("UserAuth must be used within an AuthContextProvider");
  }
  return context;
}
