import axios from "axios";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import { Heading } from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const handleSignupRequest = async () => {
    const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
    const res = await axios.post(`${base}/api/v1/user/signup`, {
      username,
      firstName,
      lastName,
      password,
    });
    console.log(res);
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading title={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            placeholder={"John"}
            label={"First Name"}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputBox
            placeholder={"Doe"}
            label={"last Name"}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputBox
            placeholder={"John.Doe@gmail.com"}
            label={"Email"}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputBox
            placeholder={"123456"}
            label={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="pt-4">
            <Button onClick={handleSignupRequest} label={"Sign up"} />
          </div>
          <div className="">
            <BottomWarning
              label={"Already have an account?"}
              buttonText={"Sign in"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
