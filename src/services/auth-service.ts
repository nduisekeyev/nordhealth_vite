import { JWT } from "@/types";

const BASE_API_URL = "https://nordhealth-server.vercel.app";

class AuthService {
  async login(email: string, password: string, updates: boolean) {
    try {
      const response = await fetch(`${BASE_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, updates }),
      });
      if (!response.ok) {
        let errorMessage = "Authentication failed. ";

        // Handle specific error cases
        if (response.status === 401) {
          errorMessage +=
            "Invalid credentials. Please check your email and password.";
        } else if (response.status === 403) {
          errorMessage +=
            "Access forbidden. You don't have permission to access this resource.";
        } else {
          errorMessage += `HTTP: ${response.statusText}`;
        }

        throw new Error(errorMessage);
      }
      const res = await response.json();
      localStorage.setItem("user", JSON.stringify(res));
      return res;
    } catch (error) {
      console.error("Error during authentication:", error);
      throw error;
    }
  }

  async logout({ accessToken }: JWT) {
    try {
      await fetch(`${BASE_API_URL}/api/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include the jwt access token
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // Clear user data from local storage
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error during sign-out:", error);
      throw error;
    }
  }
}

export default new AuthService();
