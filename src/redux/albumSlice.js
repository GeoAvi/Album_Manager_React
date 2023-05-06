import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const albumSlice = createSlice({
  name: "albumstore",
  initialState: {
    value: 0,
    albums: [],
    isEditted: null,
  },
  reducers: {
    toggleIsEditted: (state, action) => {
      state.isEditted = action.payload;
    },

    saveAlbums: (state, action) => {
      state.albums = action.payload;
    },

    addAlbum: (state, action) => {
      let tmpAlbum = JSON.parse(JSON.stringify(state.albums));
      tmpAlbum.unshift({
        userId: action.payload.userId,
        id: uuidv4(),
        title: action.payload.title,
      });
      console.log(tmpAlbum);
      state.albums = tmpAlbum;
    },

    deleteAlbum: (state, action) => {
      state.albums = state.albums.filter(
        (album) => album.id !== action.payload.id
      );
    },

    editAlbumTitle: (state, action) => {
      const album = state.albums.find(
        (album) => album.id === action.payload.id
      );
      if (album) {
        album.title = action.payload.title;
      }
      state.isEditted = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveAlbums,
  deleteAlbum,
  addAlbum,
  editAlbumTitle,
  toggleIsEditted,
} = albumSlice.actions;

export default albumSlice.reducer;
