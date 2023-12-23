import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarTab from "./Components/Navbar/NavbarTab";
import Live from "./Components/LiveMatches/Live";
import AllMatchesShow from "./Components/AllMatches/AllMatchesShow";
import ErrorPage from "./Error/ErrorPage";
import Register from "./Components/Account/Register";
import Login from "./Components/Account/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarTab />
        <Routes>
          <Route path="/" element={<Live />} />
          <Route path="/allMatches" element={<AllMatchesShow />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
