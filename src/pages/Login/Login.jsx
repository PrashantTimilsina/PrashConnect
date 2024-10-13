import { useNavigate } from "react-router-dom";
import "./login.css";
import { useEffect, useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setEmail(email);
    setPass(pass);
  }, [email, pass]);
  function handleLogin(e) {
    e.preventDefault();
    // const storedId = localStorage.getItem("userId");
    const storedPass = localStorage.getItem("userPass");
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail !== email || storedPass !== pass)
      return alert("Please check the details properly");
    navigate("/home");
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
              placeholder="Email"
              className="logInput"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              placeholder="Password"
              className="logInput"
              onChange={(e) => setPass(e.target.value)}
            ></input>
            <button className="loginButton" onClick={handleLogin}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button
              className="loginRegisterButton"
              onClick={() => navigate("/")}
            >
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
