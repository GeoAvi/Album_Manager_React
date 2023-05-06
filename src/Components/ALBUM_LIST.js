import "../index.css";
import React, { useEffect } from "react";
import image from "./images-solid.svg";

import { useSelector, useDispatch } from "react-redux";
import { saveAlbums, toggleIsEditted } from "../redux/albumSlice";
import { deleteAlbum } from "../redux/albumSlice";

const ALBUM_LIST = () => {
  const { albums } = useSelector((state) => state.albumstore);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in");
    fetch(" https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((response) => {
        dispatch(saveAlbums(response));
      });
  });

  useEffect(() => {
    console.log("2nd use effect", albums);
  }, [albums]);

  const handleDelete = (album) => {
    dispatch(deleteAlbum(album));
  };

  return (
    <div className="album_grid">
      {albums &&
        albums.map((data, index) => {
          return (
            <div className="album_card" key={index}>
              <img src={image} alt="display used"></img>
              <span className="album_title">{data.title}</span>
              <div className="editting_button">
                <button onClick={() => dispatch(toggleIsEditted(data))}>
                  Edit
                </button>
                <button onClick={() => handleDelete(data)}>Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ALBUM_LIST;
