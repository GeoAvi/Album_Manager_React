import "../index.css";

function TOP_HEADING({ setToggleAddAlbum }) {
  return (
    <div className="topheading">
      <span>Your Albums</span>
      <button className="add" onClick={() => setToggleAddAlbum(true)}>
        Add Album
      </button>
    </div>
  );
}

export default TOP_HEADING;
