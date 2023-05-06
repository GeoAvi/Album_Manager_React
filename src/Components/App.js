import "../index.css";
import Navbar from "./Navbar";

import { Provider } from "react-redux";
import store from "../redux/store";
import ADD_ALBUM_PAGE from "./ADD_ALBUM_PAGE";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <ADD_ALBUM_PAGE />
      </div>
    </Provider>
  );
}

export default App;
