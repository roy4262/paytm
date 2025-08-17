const axios = require("axios");

async function testAPI() {
  try {
    console.log("Testing API connectivity...");

    // Test basic connectivity
    const response = await axios.get("http://localhost:4000/api/v1/user/bulk", {
      headers: {
        Authorization: "Bearer invalid-token",
      },
    });

    console.log("Response:", response.data);
  } catch (error) {
    console.log("Error response:", error.response?.data);
    console.log("Error status:", error.response?.status);
    console.log("Error code:", error.code);
  }
}

testAPI();
