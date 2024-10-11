import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

// function App() {
//   return <Home />;
// }

// export default App;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
