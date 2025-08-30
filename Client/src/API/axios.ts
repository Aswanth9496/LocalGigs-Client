import axios from "axios";
import { store } from "../store/Store";
import { setCredentials, logout } from "../features/auth/authSlice";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});


// Separate axios instance for refresh token so it doesn't trigger interceptors
const refreshApi = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

// Attach access token to requests
api.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 errors & refresh token flow
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Only retry once
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Use separate instance to avoid interceptor recursion
        const refreshResponse = await refreshApi.post("/auth/refresh");
        const newAccessToken = refreshResponse.data.accessToken;

        // Update Redux store
        store.dispatch(
          setCredentials({
            user: store.getState().auth.user,
            accessToken: newAccessToken,
          })
        );

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        store.dispatch(logout());
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;







