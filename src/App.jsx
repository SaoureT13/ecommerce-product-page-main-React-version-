import { createPortal } from "react-dom";
import "./App.scss";
import { Main } from "./Components/Main.jsx";
import { NavBar } from "./Components/NavBar.jsx";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Main />
      {/* <LightBox /> */}
    </div>
  );
}

// function LightBox() {
//   return createPortal(<ProductGallery />, document.body);
// }

export default App;
