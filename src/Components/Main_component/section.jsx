import "./section.scss";
import minus from "../../assets/images/icon-minus.svg";
import plus from "../../assets/images/icon-plus.svg";

export function Section({
  productNameRef,
  productReductionRef,
  productPriceRef,
  idProductRef,
  onAddToCart,
  onIncrementQty,
  onDecrementQty,
  Qty
}) {
  return (
    <section className="section" data-id="1111" ref={idProductRef}>
      <div className="store-name">
        <h3>Sneaker Company</h3>
      </div>
      <div className="product-name">
        <h1 ref={productNameRef}>Fall Limited Edition Sneakers</h1>
      </div>
      <div className="product-description">
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="product-price">
        <p>
          $125.00{" "}
          <span className="reduction" ref={productReductionRef}>
            50%
          </span>
        </p>
        <p className="price" ref={productPriceRef}>
          $250.00
        </p>
      </div>

      <div className="btn-box">
        <div className="btn-qty">
          <img src={minus} alt="minus" className="minus" onClick={onDecrementQty}/>
          <p className="qty">{Qty}</p>
          <img src={plus} alt="plus" className="plus" onClick={onIncrementQty}/>
        </div>

        <button className="btn-add" onClick={onAddToCart}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </section>
  );
}
