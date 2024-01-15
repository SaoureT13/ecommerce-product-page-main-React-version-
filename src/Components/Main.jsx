import { ProductGallery } from "./Main_component/product-gallerie";
import { Section } from "./Main_component/section";
import "./Main.scss";

export function Main({
  handleShowLightBox,
  productNameRef,
  productReductionRef,
  productPriceRef,
  idProductRef,
  handleAddProductCart,
  productImageRef,
  handleIncrementQty,
  handleDecrementQty,
  Qty
}) {
  return (
    <div className="main">
      <section>
        <ProductGallery
          onClick={handleShowLightBox}
          productImageRef={productImageRef}
        />
      </section>
      <Section
        productNameRef={productNameRef}
        productReductionRef={productReductionRef}
        productPriceRef={productPriceRef}
        idProductRef={idProductRef}
        onAddToCart={handleAddProductCart}
        //Quantité
        onIncrementQty={handleIncrementQty}
        onDecrementQty={handleDecrementQty}
        Qty={Qty}
      />
    </div>
  );
}
