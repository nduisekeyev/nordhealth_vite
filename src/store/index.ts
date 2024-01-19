import AuthService from "@/services/auth-service";
import { createStore } from "vuex";

interface User {
  email: string;
  password: string;
}

interface RootState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

const savedUser = JSON.parse(localStorage.getItem("user"));

export default createStore<RootState>({
  state: {
    user: null || savedUser,
    isAuthenticated: !!savedUser,
    error: null,
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user;
      console.log("state", state.user);

      state.isAuthenticated = !!user;
    },
    setUserFailure(state, error: string) {
      state.error = error;
    },
  },
  actions: {
    login({ commit }, user: User) {
      // If successful, commit the user to the store
      return AuthService.login(user.email, user.password).then(
        (user) => {
          console.log("setUser", user);
          commit("setUser", user);
          commit("setUserFailure", null);
          return Promise.resolve(user);
        },
        (error) => {
          commit("setUserFailure", error);
          return Promise.reject(error);
        }
      );
    },
    async logout({ commit }, accessToken) {
      // After logout, commit null user to the store
      await AuthService.logout(accessToken);
      commit("setUser", null);
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
    error: (state) => state.error,
  },
});
