import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, isLoading, user } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/home#services";
  console.log(user);
  const handleGoogleLogIn = () => {
    signInUsingGoogle();
    if (!isLoading) {
      history.push(redirect_uri);
    }
  };
  return (
    <div className="login-bg">
      <div>
        <h1 className="mx-auto text-light ">Please Log In</h1>
        <button className="btn btn-danger" onClick={handleGoogleLogIn}>
          Log in with Google
        </button>
      </div>
      <img src="https://i.imgflip.com/m2257.jpg" alt="" />
    </div>
  );
};

export default Login;
