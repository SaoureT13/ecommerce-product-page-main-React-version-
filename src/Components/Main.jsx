import { ProductGallery } from "./Main component/product-gallerie";
import { Section } from "./Main component/section";
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
