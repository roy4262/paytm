import { useNavigate } from "react-router-dom";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import { Heading } from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { useState } from "react";
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInRequest = async () => {
    const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
    const res = await axios.post(`${base}/api/v1/user/signin`, {
      username,
      password,
    });
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading title={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => setUserName(e.target.value)}
            placeholder={"John.doe@gmail.com"}
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"123456"}
            label={"Password"}
          />
          <div className="pt-4">
            <Button onClick={handleSignInRequest} label={"Sign In"} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
