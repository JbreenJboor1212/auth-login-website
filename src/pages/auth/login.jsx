import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  const { login, loginByGoogle, loginByFacebook } = useAuth();

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      nav("/");
    } catch (err) {
      setError("There was an error");
      setLoading(false);
    }
  };

  const handleClickByGoogle = async () => {
    try {
      await loginByGoogle();
      nav("/");
    } catch (err) {
      setError("There was an error");
    }
  };

  const handleClickByFacebook = async () => {
    try {
      await loginByFacebook();
      nav("/");
    } catch (err) {
      setError("There was an error");
    }
  };

  return (
    <div className="form_wrapper">
      <div className="form_container">
        <div className="title_container">
          <h2>Register !!</h2>
        </div>
        <div className="row clearfix">
          <form onSubmit={handelSubmit}>
            <div className="input_field">
              {" "}
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                ref={emailRef}
              />
            </div>

            <div className="input_field">
              {" "}
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                minLength={6}
                required
                ref={passwordRef}
              />
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <button className="button" type="submit" disabled={loading}>
              Login
            </button>
          </form>
          <div className="add">
            <div className="register-noe">
              <Link to={"/register"} className="link one">
                Register Now
              </Link>
            </div>
            <div className="forget-password">
              <Link to={"/forget-password"} className="link two">
                Forget Password?
              </Link>
            </div>
          </div>
          <div className="two-child">
            <hr />
            <span className="span">Or</span>
          </div>
          <div className="full-child-facebook" onClick={handleClickByFacebook}>
            <i className="bi bi-facebook"></i>
            <p>LOGIN WITH FACEBOOK</p>
          </div>
          <div className="full-child-twitter">
            <i className="bi bi-twitter"></i>
            <p>LOGIN WITH TWITTER</p>
          </div>
          <div className="full-child-goggle" onClick={handleClickByGoogle}>
            <i className="bi bi-google"></i>
            <p>LOGIN WITH GOOGLE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
