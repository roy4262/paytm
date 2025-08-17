import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const [user, setUser] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
    axios
      .get(`${base}/api/v1/user/me`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => setUser(res.data.firstName))
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div
        className="flex relative"
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col justify-center h-full mr-4">{user}</div>
        <div
          className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 cursor-pointer hover:bg-slate-300 transition-colors"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="flex flex-col justify-center h-full text-xl">
            {user[0]}
          </div>
        </div>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute right-2 top-14 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
            <div className="py-1">
              <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                <div className="font-medium">{user}</div>
                <div className="text-xs text-gray-500">Signed in</div>
              </div>
              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppBar;
