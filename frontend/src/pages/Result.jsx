import { useSearchParams, useNavigate } from "react-router-dom";

const Result = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const msg = searchParams.get("msg");
  const success = searchParams.get("success") === "true";
  const userId = searchParams.get("userId");
  const userName = searchParams.get("userName");

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-3xl font-bold text-center">
              {success ? "Transfer Successful!" : "Transfer Failed"}
            </h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col items-center space-y-6">
              {/* Success/Error Icon */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  success ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {success ? (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>

              {/* Message */}
              <div
                className={`text-center p-4 rounded-lg ${
                  success
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                <p className="text-lg font-medium">{msg}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 w-full">
                <button
                  onClick={() => navigate("/dashboard")}
                  className={`${
                    success && userId && userName ? "flex-1" : "w-full"
                  } justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-600`}
                >
                  Go to Dashboard
                </button>
                {success && userId && userName && (
                  <button
                    onClick={() =>
                      navigate(`/send?id=${userId}&name=${userName}`)
                    }
                    className="flex-1 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 bg-green-500 text-white cursor-pointer hover:bg-green-600"
                  >
                    Send Again
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
