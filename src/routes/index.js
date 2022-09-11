import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeIndex from "../pages/home";
import SignIn from "../pages/signin";
import SignUp from "../pages/signUp";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();
  
    return signed > 0 ? <Item /> : <SignIn />;
  };
  
  const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/home" element={<Private Item={HomeIndex} />} />
            <Route path="/" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="*" element={<SignUp />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    );
  };
  
  export default RoutesApp;