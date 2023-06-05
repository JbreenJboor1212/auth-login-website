import React, { useRef, useState } from "react";
import "./Auth.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCRef = useRef();

  const notifyTwo = () =>
    toast.error("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notify = () =>
    toast.success("🦄 Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();

  const nav = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordCRef.current.value) {
      setError("كلمات المرور غير متطابقة");
      return;
    }

    try {
      setError("");
      setLoading(true);
      notify();
      await register(emailRef.current.value, passwordRef.current.value);
      nav("/");
    } catch (err) {
      setError("فشل في إنشاء حساب");
      notifyTwo();
    }
    setLoading(false);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Register !!</h2>
          </div>
          <div className="row clearfix">
            <div>
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
                <div className="input_field">
                  {" "}
                  <label>Password Confirmation</label>
                  <input
                    minLength={6}
                    type="password"
                    name="password"
                    placeholder="Password Confirmation"
                    required
                    ref={passwordCRef}
                  />
                </div>
                {error && <Alert variant="danger">{error}</Alert>}
                <button className="button" type="submit" disabled={loading}>
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
