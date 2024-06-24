import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { signInWithEmailAndPassword } from "../store/authThanks";
import { useAppDispatch } from "../store/hooks";

const LoginComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.app.isLoading);
  const error = useSelector((state: RootState) => state.app.error);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    dispatch(signInWithEmailAndPassword(email, password));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit" disabled={loading}>
          Sign In
        </button>
      </form>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default LoginComponent;
