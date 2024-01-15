import { createPortal } from "react-dom";
import "./App.scss";
import { Main } from "./Components/Main.jsx";
import { NavBar } from "./Components/NavBar.jsx";
import { ProductGallery } from "./Components/Main_component/product-gallerie.jsx";
import { useEffect, useRef, useState } from "react";
import { AddOnCart } from "./Components/cartProduct/cartProduct.jsx";
// import { useIncrementQty } from "./Hooks/useIncrement.jsx";

function App() {
  //MAIN
  const productNameRef = useRef();
  const productReductionRef = useRef();
  const productPriceRef = useRef();
  const idProductRef = useRef();
  const productImageRef = useRef();

  //NAVBAR
  const divEmptyRef = useRef();
  const cartProductRef = useRef();
  const [showLightBox, setShowLightBox] = useState("");
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  // const [currentProductName, setCurrentProductName] = useState("");
  // const [currentProductPrice, setCurrentProductPrice] = useState("");
  // const [currentProductReduction, setCurrentProductReduction] = useState("");
  // const [currentidProduct, setCurrentidProduct] = useState("");
  // const [currentProductImage, setCurrentproductImage] = useState("");
  // const { valueQty, incrementQty, decrementQty } = useIncrementQty(0);

  const [value, setValue] = useState(0);

  const incrementQty = () => {
    setValue((v) => v + 1);
  };

  const decrementQty = () => {
    setValue((v) => (v > 0 ? v - 1 : 0));
  };

  const handleShowLightBox = () => {
    setShowLightBox((v) => (v == "" ? "active" : ""));
  };

  //Fonction pour ajouter les produits dans un objet panier du client
  const handleAddProductCart = (e) => {
    e.preventDefault();
    // let newProduct = true;

    // setCurrentProductName(currentProductName == "" ?  : "");
    // setCurrentProductPrice();
    // setCurrentProductReduction();
    // setCurrentidProduct();
    // setCurrentproductImage();

    if (value === 0) {
      return;
    } else {
      if (cart.length > 0) {
        const newCart = cart.map((product) => {
          return product.id == idProductRef.current.dataset.id
            ? { ...product, quantity: value }
            : product;
        });
        setCart(newCart);
      } else {
        let productPrice = parseFloat(
          productPriceRef.current.textContent.replace("$", "")
        );
        let productReduction = parseFloat(
          productReductionRef.current.textContent.replace("$", "")
        );
        let priceWithReduc = (productPrice * productReduction) / 100;

        let product = {
          id: idProductRef.current.dataset.id,
          name: productNameRef.current.textContent,
          price: productPriceRef.current.textContent,
          tauxReduction: productReductionRef.current.textContent,
          prixReduction: priceWithReduc,
          image: productImageRef.current.getAttribute("src"),
          quantity: value,
        };

        setCart([product]);
        cartProductRef.current.classList.remove("empty");
        // console.log(cart);
      }
    }
  };

  const handleDeleteProduct = (e) => {
    let parent = e.target.parentNode;
    let parentId = parent.getAttribute("id");

    function filterCartItems(obj) {
      return obj == parentId ? true : false;
    }

    if (cart.length > 1) {
      setCart(cart.filter(filterCartItems));
    } else {
      setCart([]);
      cartProductRef.current.classList.add("empty");
    }
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    const newTotalQuantity = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  return (
    <div className="container">
      <NavBar
        emptyRef={divEmptyRef}
        cartProductRef={cartProductRef}
        tab={cart}
        Qty={totalQuantity}
        //Delete product in cart
        handleDeleteProduct={handleDeleteProduct}
      />
      <Main
        handleShowLightBox={handleShowLightBox}
        productNameRef={productNameRef}
        productPriceRef={productPriceRef}
        productReductionRef={productReductionRef}
        idProductRef={idProductRef}
        handleAddProductCart={handleAddProductCart}
        productImageRef={productImageRef}
        //Quantité
        handleIncrementQty={incrementQty}
        handleDecrementQty={decrementQty}
        Qty={value}
      />
      <LightBox active={showLightBox} onClick={handleShowLightBox} />
    </div>
  );
}

function LightBox({ active, onClick }) {
  return createPortal(
    <div className={`light-box ${active}`}>
      <div className="overlay" onClick={onClick}></div>
      <div className="contain-product">
        <ProductGallery onClick={onClick} />
      </div>
    </div>,
    document.body
  );
}

export default App;
