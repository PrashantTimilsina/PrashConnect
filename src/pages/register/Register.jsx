import { useNavigate } from "react-router-dom";
import "./register.css";
import { useState } from "react";
function Register() {
  const [signName, setSignName] = useState("");
  const [signPass, setSignPass] = useState("");
  const [signConfirm, setSignConfirm] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const navigate = useNavigate();
  function handleRegister(e) {
    e.preventDefault();
    if (signPass === "" || signName === "" || signEmail === "")
      return alert("Please fill the required field");
    if (signPass !== signConfirm) return alert("Password doesnot match");
    localStorage.setItem("userId", signName);
    localStorage.setItem("userPass", signPass);
    localStorage.setItem("userEmail", signEmail);
    navigate("/login");
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">PrashConnect</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on PrashConnect.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              className="logInput"
              onChange={(e) => setSignName(e.target.value)}
            ></input>
            <input
              placeholder="Email"
              className="logInput"
              onChange={(e) => setSignEmail(e.target.value)}
            ></input>
            <input
              placeholder="Password"
              className="logInput"
              onChange={(e) => setSignPass(e.target.value)}
            ></input>
            <input
              placeholder="Confirm Password"
              className="logInput"
              onChange={(e) => setSignConfirm(e.target.value)}
            ></input>
            <button className="loginButton" onClick={handleRegister}>
              Sign Up
            </button>

            <button
              className="loginRegisterButton"
              onClick={() => navigate("/login")}
            >
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
