import axios from "axios";
import { useEffect, useState } from "react";

const Balance = () => {
  const [balance, setbalance] = useState(0);
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/account/balance",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setbalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
        // Handle error appropriately - maybe set balance to 0 or show error message
        setbalance(0);
      }
    };

    fetchBalance();
  }, []);
  return (
    <div className="flex">
      <div className="font-bold text-lg">Your Balance</div>
      <div className="font-semibold ml-4 text-lg">Rs. {balance.toFixed(2)}</div>
    </div>
  );
};

export default Balance;
