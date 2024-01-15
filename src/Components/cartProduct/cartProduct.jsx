import delete_icon from "../../assets/images/icon-delete.svg";

// export function AddOnCart({
//   id,
//   image,
//   name,
//   prixReduction,
//   quantity,
//   price,
//   tauxReduction,
// }) {
//   return (
//     <div className="cart-item" id={id}>
//       <img src={image} alt={name} className="product-image" />
//       <div className="param">
//         <div className="product-name">{name}</div>
//         <div className="price">{`${prixReduction}.00 x ${quantity}`}</div>
//         {tauxReduction === 0 ? (
//           <span className="tl-price">{`${price}.00`}</span>
//         ) : (
//           <span className="tl-price">{`${prixReduction * quantity}.00`}</span>
//         )}
//       </div>
//       <img src={delete_icon} alt="dash-icon" className="delete" />
//     </div>
//   );
// }

export function AddOnCart({ tab }) {
  return tab.map((item) =>{
    <div key={item.id} className="cart-item" id={item.id}>
      <img src={item.image} alt={item.name} className="product-image" />
      <div className="param">
        <div className="product-name">{item.name}</div>
        <div className="price">{`${item.prixReduction}.00 x ${item.quantity}`}</div>
        {item.tauxReduction === 0 ? (
          <span className="tl-price">{`${item.price}.00`}</span>
        ) : (
          <span className="tl-price">{`${
            item.prixReduction * item.quantity
          }.00`}</span>
        )}
      </div>
      <img src={delete_icon} alt="dash-icon" className="delete" />
    </div>
  })
}
/** <div className="cart-item" id={id}>
        <img src={image} alt={name} className="product-image" />
        <div className="param">
          <div className="product-name">{name}</div>
          <div className="price">{`${prixReduction}.00 x ${quantity}`}</div>
          {tauxReduction === 0 ? (
            <span className="tl-price">{`${price}.00`}</span>
          ) : (
            <span className="tl-price">{`${prixReduction * quantity}.00`}</span>
          )}
        </div>
        <img src={delete_icon} alt="dash-icon" className="delete" />
      </div>*/
/**
 * <div key={item.id} className="cart-item" id={item.id}>
      <img src={item.image} alt={item.name} className="product-image" />
      <div className="param">
        <div className="product-name">{item.name}</div>
        <div className="price">{`${item.prixReduction}.00 x ${item.quantity}`}</div>
        {item.tauxReduction === 0 ? (
          <span className="tl-price">{`${item.price}.00`}</span>
        ) : (
          <span className="tl-price">{`${
            item.prixReduction * item.quantity
          }.00`}</span>
        )}
      </div>
      <img src={delete_icon} alt="dash-icon" className="delete" />
    </div>
 */