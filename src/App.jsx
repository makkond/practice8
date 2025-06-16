import "./App.css";
import { Product } from "./components/Product/Product";
import { products } from "./products";

function App() {
  return (
    <>
      <h1>Магазин</h1>
      <div className="product-list">
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </div>
    </>
  );
}

export default App;
