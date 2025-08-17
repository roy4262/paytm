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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignInRequest = async () => {
    // Clear previous errors
    setError("");

    // Basic validation
    if (!username.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4000/api/v1/user/signin", {
        username: username.trim(),
        password: password.trim(),
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      } else {
        setError("Invalid response from server");
      }
    } catch (error) {
      console.error("Signin error:", error);

      if (error.response) {
        // Server responded with error status
        const message = error.response.data?.msg || "Login failed";
        setError(message);
      } else if (error.request) {
        // Network error
        setError(
          "Cannot connect to server. Please check if the server is running."
        );
      } else {
        // Other error
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading title={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <InputBox
            onChange={(e) => setUserName(e.target.value)}
            placeholder={"john.doe@gmail.com"}
            label={"Email"}
            value={username}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Enter your password"}
            label={"Password"}
            type="password"
            value={password}
          />
          <div className="pt-4">
            <Button
              onClick={handleSignInRequest}
              label={loading ? "Signing In..." : "Sign In"}
              disabled={loading}
            />
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
