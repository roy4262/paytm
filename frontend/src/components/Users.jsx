import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import api from "../apiClient";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await api.get("/user/bulk", { params: { filter } });
        setUsers(response.data.user || []);
      } catch (error) {
        console.error("Error fetching users:", error);
        if (error.response?.status === 411) {
          setError("Authentication failed. Please login again.");
        } else if (error.code === "ECONNREFUSED") {
          setError(
            "Cannot connect to server. Please check if the server is running."
          );
        } else {
          setError("Failed to fetch users. Please try again.");
        }
        setUsers([]);
      } finally {
        setLoading(false);
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

      {loading && <div className="text-center py-4">Loading users...</div>}

      {error && (
        <div className="text-red-500 text-sm py-2 bg-red-50 border border-red-200 rounded px-3">
          {error}
        </div>
      )}

      <div>
        {!loading && !error && users.length === 0 && (
          <div className="text-gray-500 text-center py-4">
            No users found. {filter && "Try a different search term."}
          </div>
        )}
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

import PropTypes from "prop-types";

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
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full">
        <Button
          label={"Send Money"}
          onClick={() => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`);
          }}
        />
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Users;
