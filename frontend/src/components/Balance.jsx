import api from "../apiClient";
import { useEffect, useState } from "react";

const Balance = () => {
  const [balance, setbalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await api.get("/account/balance");
        setbalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
        if (error.response?.status === 411) {
          setError("Authentication failed. Please login again.");
        } else if (error.code === "ECONNREFUSED") {
          setError(
            "Cannot connect to server. Please check if the server is running."
          );
        } else {
          setError("Failed to fetch balance. Please try again.");
        }
        setbalance(0);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  if (loading) {
    return (
      <div className="flex">
        <div className="font-bold text-lg">Your Balance</div>
        <div className="font-semibold ml-4 text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col">
        <div className="flex">
          <div className="font-bold text-lg">Your Balance</div>
          <div className="font-semibold ml-4 text-lg">Rs. 0.00</div>
        </div>
        <div className="text-red-500 text-sm mt-1">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="font-bold text-lg">Your Balance</div>
      <div className="font-semibold ml-4 text-lg">Rs. {balance.toFixed(2)}</div>
    </div>
  );
};

export default Balance;
