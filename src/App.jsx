import { createPortal } from "react-dom";
import "./App.scss";
import { Main } from "./Components/Main.jsx";
import { NavBar } from "./Components/NavBar.jsx";
import { ProductGallery } from "./Components/Main_component/product-gallerie.jsx";
import { useRef, useState } from "react";

function App() {
  const nextRef = useRef();
  const previousRef = useRef();
  // const closeRef = useRef();


  const [showLightBox, setShowLightBox] = useState("");

  const handleShowLightBox = () => {
    // if(nextRef.current && previousRef.current){
    //   nextRef.current.removeAttribute("id")
    //   previousRef.current.removeAttribute("id")
    // }
    console.log(nextRef.current)
    console.log(previousRef.current)
    setShowLightBox((v) => (v == "" ? "active" : ""));
  };

  return (
    <div className="container">
      <NavBar />
      <Main nextRef={nextRef} previousRef={previousRef} onClick={handleShowLightBox} />
      <LightBox active={showLightBox} onClick={handleShowLightBox}/>
    </div>
  );
}

function LightBox({ active, onClick,  nextRef, previousRef}) {
  return createPortal(
    <div className={`light-box ${active}`}>
      <div className="overlay" onClick={onClick}></div>
      <div className="contain-product">
        <ProductGallery nextRef={nextRef} previousRef={previousRef} onClick={onClick}/>
      </div>
    </div>,
    document.body
  );
}

export default App;
