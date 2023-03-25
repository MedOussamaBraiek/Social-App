import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, actions) => {
      if (state.user) {
        state.user.friends = actions.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, actions) => {
      state.posts = actions.payload.posts;
    },
    setPost: (state, actions) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === actions.payload.post._id) return actions.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
