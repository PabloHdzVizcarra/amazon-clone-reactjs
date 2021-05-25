import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import { auth } from "../../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(event) {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history.push("/");
      })
      .catch(console.log);
  }

  function handleRegisterAccount(event) {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch(console.log);
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
          alt="amazon-logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h2>Sign-In</h2>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon Clone App Conditions of Use & Sale.
        </p>

        <button
          className="login__registerButton"
          onClick={handleRegisterAccount}
        >
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
