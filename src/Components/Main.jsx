import { ProductGallery } from "./Main_component/product-gallerie";
import { Section } from "./Main_component/section";
import "./Main.scss";

export function Main({onClick}) {
  return (
    <div className="main">
      <section>
        <ProductGallery onClick={onClick}/>
      </section>
      <Section />
    </div>
  );
}
