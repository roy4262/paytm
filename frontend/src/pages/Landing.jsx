import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Heading } from "../components/Heading";
import SubHeading from "../components/SubHeading";

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="bg-slate-300 min-h-screen">
      {/* Hero Section */}
      <div className="flex justify-center pt-16">
        <div className="text-center max-w-4xl px-4">
          <div className="mb-8">
            {/* PayTM Logo */}
            <div className="flex justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="80"
                height="80"
                viewBox="0 0 50 50"
                className="text-blue-600"
              >
                <path
                  fill="currentColor"
                  d="M32.166,16.298c0.182,0,0.346,0.112,0.487,0.364l0.013,1.567h1.504c0.228,0,0.413,0.186,0.413,0.413v2.049	c0,0.226-0.186,0.413-0.413,0.413h-1.504v9.17c0,0.228-0.186,0.413-0.412,0.413h-2.051c-0.227,0-0.412-0.185-0.412-0.413v-9.17	h-1.467c-0.225,0-0.413-0.186-0.413-0.413v-2.049c0-0.227,0.186-0.413,0.412-0.413h0.51c1.311-0.273,1.774-0.594,2.576-1.459	C31.683,16.474,31.939,16.298,32.166,16.298 M37.953,18.229c0.285,0,0.517,0.231,0.517,0.515v0.28	c0.567-0.543,1.261-0.787,1.95-0.787c0.85,0,1.693,0.37,2.282,1.006c0.615-0.706,1.365-1.003,2.105-1.003	c1.676,0,3.299,1.525,3.188,3.279c0,2.794-0.025,5.839-0.025,8.657c0,0.282-0.234,0.513-0.516,0.513h-1.812	c-0.285,0-0.517-0.231-0.517-0.513c0-2.67,0-5.464,0-8.088c0-0.634-0.491-0.962-0.975-0.962c-0.473,0-0.941,0.313-0.941,0.962v8.088	H43.2c0,0.282-0.234,0.513-0.517,0.513h-1.83c-0.285,0-0.518-0.231-0.518-0.513v-6.347v-1.793c0-0.615-0.48-0.923-0.959-0.923	s-0.959,0.308-0.959,0.923v8.14c0,0.282-0.232,0.513-0.517,0.513h-1.841c-0.285,0-0.518-0.231-0.518-0.513V18.743	c0-0.284,0.233-0.515,0.518-0.515H37.953 M21.696,18.229c0.314,0,0.429,0.209,0.43,0.494v4.847c0,0.242,0.139,0.38,0.392,0.38h1.247	c0.172,0,0.278-0.112,0.278-0.303v-5.001c0-0.172,0.126-0.404,0.34-0.404h2.206c0.16,0,0.328,0.103,0.328,0.367v8.472	c0.001,2.49-1.126,3.601-3.441,3.601H20.64c-0.229,0-0.404-0.163-0.404-0.38v-2.062c0-0.286,0.118-0.456,0.443-0.456h2.966	c0.538,0,0.572-0.929,0-0.929h-1.355c-1.498,0-2.92-1.148-3.039-2.681v-5.374c0-0.317,0.064-0.569,0.318-0.569	C20.314,18.229,20.95,18.229,21.696,18.229 M15.357,18.229c1.921,0.112,2.959,1.383,2.933,3.474v7.929	c0,0.601-0.606,1.055-1.124,1.055h-4.052c-1.305,0-2.167-1.017-2.382-2.013c-0.121-0.564-0.115-1.196-0.107-1.82	c0.005-0.438,0-1.383,0-1.785c0-1.509,1.055-3.006,2.722-3.006h1.502c0.51-0.027,0.569-0.958,0-0.958h-2.736	c-0.277,0-0.472-0.148-0.498-0.429c0-0.677,0-1.433,0-2.109c0-0.26,0.214-0.336,0.463-0.336H15.357 M13.928,27.812h1.059	c0.236,0,0.429-0.194,0.429-0.431v-2.013c0-0.237-0.194-0.43-0.429-0.43h-1.059c-0.236,0-0.428,0.194-0.428,0.43v2.013	C13.5,27.619,13.693,27.812,13.928,27.812 M7.219,18.238c1.44,0.164,2.447,0.897,2.544,2.825l-0.105,2.743	c0,0.387-0.022,0.713-0.134,1.09c-0.374,1.255-1.271,1.878-2.611,1.966l-2.037-0.009c0,1.065,0,2.38,0,3.444	c0,0.24-0.201,0.359-0.446,0.359c-0.704,0-1.279,0-1.984,0c-0.258,0-0.447-0.144-0.446-0.431L2.043,18.72	c0.001-0.321,0.217-0.481,0.482-0.481H7.219 M4.875,23.979h1.4c0.281,0,0.512-0.231,0.512-0.513v-1.85	c0-0.283-0.231-0.513-0.512-0.513h-1.4V23.979 M32.166,14.298C32.166,14.298,32.166,14.298,32.166,14.298	c-0.795,0-1.544,0.375-2.227,1.116c-0.507,0.546-0.636,0.661-1.319,0.815h-0.297c-0.313,0-0.612,0.06-0.887,0.169	c-0.262-0.101-0.547-0.156-0.848-0.156h-2.206c-0.482,0-0.93,0.15-1.303,0.408c-0.388-0.267-0.862-0.42-1.384-0.42h-2.128	c-0.604,0-1.212,0.243-1.654,0.717c-0.691-0.411-1.513-0.659-2.44-0.714c-0.039-0.002-0.078-0.003-0.117-0.003h-3.28	c-0.877,0-1.619,0.392-2.053,1.011c-0.682-0.533-1.55-0.871-2.579-0.988c-0.075-0.009-0.151-0.013-0.226-0.013H2.525	c-1.388,0-2.478,1.087-2.482,2.475L0,30.219c-0.002,0.664,0.245,1.278,0.696,1.73c0.455,0.457,1.077,0.708,1.749,0.708h1.984	c1.371,0,2.446-1.036,2.446-2.359v-1.436l0.029,0c0.003,0,0.006,0,0.009,0c0.044,0,0.087-0.001,0.131-0.004	c0.596-0.039,1.144-0.154,1.639-0.34c0.023,0.191,0.053,0.384,0.094,0.575c0.456,2.117,2.239,3.595,4.337,3.595h4.052	c0.691,0,1.339-0.233,1.863-0.622c0.427,0.382,0.992,0.615,1.611,0.615h2.836c1.722,0,3.077-0.496,4.025-1.474	c0.124-0.128,0.241-0.264,0.349-0.407c0.24,1.079,1.205,1.888,2.355,1.888h2.051c0.757,0,1.434-0.351,1.877-0.899	c0.462,0.549,1.155,0.899,1.928,0.899H37.9c0.551,0,1.061-0.178,1.476-0.479c0.415,0.301,0.925,0.479,1.477,0.479h1.83	c0.552,0,1.064-0.179,1.479-0.481c0.415,0.302,0.927,0.481,1.479,0.481h1.812c1.387,0,2.516-1.127,2.516-2.513	c0-1.409,0.006-2.875,0.012-4.337c0.006-1.443,0.012-2.884,0.012-4.264c0.064-1.327-0.427-2.617-1.388-3.64	c-1.01-1.076-2.395-1.693-3.8-1.693c-0.757,0-1.484,0.18-2.143,0.523c-0.694-0.342-1.462-0.525-2.244-0.525	c-0.491,0-0.971,0.074-1.429,0.216c-0.316-0.144-0.668-0.224-1.037-0.224h-1.894c-0.338,0-0.66,0.067-0.955,0.188	c-0.156-0.066-0.32-0.115-0.49-0.147c-0.041-0.205-0.114-0.404-0.217-0.587C33.903,14.803,33.09,14.298,32.166,14.298L32.166,14.298	z"
                />
              </svg>
            </div>
            <Heading title={"Welcome to PayTM"} />
            <div className="mt-4">
              <SubHeading
                label={
                  "Your trusted digital wallet for seamless money transfers"
                }
              />
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex gap-4 justify-center mb-16">
            <div className="w-40">
              <Button onClick={handleGetStarted} label={"Get Started"} />
            </div>
            <div className="w-40">
              <button
                onClick={handleSignIn}
                className="w-full text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 border border-gray-300 cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex justify-center pb-16">
        <div className="max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose PayTM?
            </h2>
            <p className="text-gray-600 text-lg">
              Experience the future of digital payments with our secure and
              user-friendly platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Secure Transactions
              </h3>
              <p className="text-gray-600">
                Bank-level security with end-to-end encryption for all your
                transactions
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Instant Transfers
              </h3>
              <p className="text-gray-600">
                Send money to friends and family instantly, 24/7 with real-time
                notifications
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Easy Management
              </h3>
              <p className="text-gray-600">
                Track your balance, view transaction history, and manage your
                account effortlessly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-800 text-white py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-300 mb-6">
            Join thousands of users who trust PayTM for their digital payments
          </p>
          <div className="w-48 mx-auto">
            <Button onClick={handleGetStarted} label={"Create Account Now"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
