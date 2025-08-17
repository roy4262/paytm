import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const base =
          import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
        const response = await axios.get(
          `${base}/api/v1/user/bulk?filter=${encodeURIComponent(filter)}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setUsers(response.data.user || []);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, [filter]);
  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>

      <div className="my-2">
        <input
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          placeholder="Search Users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          label={"Send Money"}
          onClick={() => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
        />
      </div>
    </div>
  );
}

export default Users;
