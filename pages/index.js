import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Filter from "../components/Filter";

export default function Home() {
  return (
    <Layout>
      <Filter></Filter>
      <div>
        <h2>Products</h2>
        form
        <ul>
          <li>
            <img
              className="index-product-img"
              src="https://m-cdn.phonearena.com/images/phones/80464-800/Google-Pixel-5.webp"
              alt=""
            />
            <h3 className="index-product-h3">Product 1</h3>
            <p className="index-product-price">£330</p>
            <button>Add to basket</button>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
