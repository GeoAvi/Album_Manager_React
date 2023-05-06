import { useState } from "react";

import TOP_HEADING from "./TOP_HEADING";

import { useSelector } from "react-redux";
import ADD_ALBUM from "./ADD_ALBUM";
import ALBUM_LIST from "./ALBUM_LIST";

function ADD_ALBUM_PAGE() {
  const [toggleAddAlbum, setToggleAddAlbum] = useState(false);
  const { isEditted } = useSelector((state) => state.albumstore);
  return (
    <div className="App">
      {(toggleAddAlbum || isEditted) && (
        <ADD_ALBUM setToggleAddAlbum={setToggleAddAlbum} />
      )}
      <TOP_HEADING setToggleAddAlbum={setToggleAddAlbum} />
      <ALBUM_LIST />
    </div>
  );
}

export default ADD_ALBUM_PAGE;
