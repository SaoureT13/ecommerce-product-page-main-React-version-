import { ProductGallery } from "./Main_component/product-gallerie";
import { Section } from "./Main_component/section";
import "./Main.scss";

export function Main() {
  return (
    <div className="main">
      <section>
        <ProductGallery />
      </section>
      <Section />
    </div>
  );
}
