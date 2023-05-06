import { useState, useEffect } from "react";
import "../index.css";
import { addAlbum, editAlbumTitle } from "../redux/albumSlice";
import { useDispatch, useSelector } from "react-redux";

const ADD_ALBUM = ({ setToggleAddAlbum }) => {
  const { isEditted } = useSelector((state) => state.albumstore);

  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addAlbum({ title, userId }));
    setToggleAddAlbum(false);
    setTitle("");
    setUserId("");
  };

  const handleUpdate = () => {
    dispatch(editAlbumTitle({ title: title, id: isEditted.id }));
    setToggleAddAlbum(false);
    setTitle("");
    setUserId("");
  };

  useEffect(() => {
    setTitle("");
    setUserId("");
  }, []);

  useEffect(() => {
    if (isEditted) {
      setTitle(isEditted.title);
      setUserId(isEditted.userId);
    }
  }, [isEditted]);

  return (
    <div className="outerdiv">
      <form>
        <div className="Add_album_container">
          <div className="Add_album_inputs">
            <h2>Enter Details of your new Album</h2>
            <input
              placeholder="Enter Album Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <br></br>
            <input
              placeholder="Enter User Id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              disabled={isEditted}
            />

            <br></br>
            <div className="divbutton">
              {!isEditted ? (
                <button type="button" onClick={handleAdd}>
                  Add
                </button>
              ) : (
                <button type="button" onClick={handleUpdate}>
                  Update
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ADD_ALBUM;
