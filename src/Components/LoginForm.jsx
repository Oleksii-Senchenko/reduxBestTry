import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(e.currentTarget.elements.login.value));
    e.currentTarget.reset();
    navigate("/dashboard", { replace: true });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <button type="submit">Wellcome to the club, body</button>
      </form>
    </div>
  );
};

export default LoginForm;
