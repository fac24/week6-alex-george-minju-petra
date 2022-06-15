import { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Filter from "../components/Filter";
import { getAllProducts } from "../database/model";
import { getAllCategories } from "../database/model.js";

export async function getServerSideProps() {
  const allProducts = await getAllProducts();
  const allCategories = await getAllCategories();
  //if line 9 was a db request or something, it would need an await
  return {
    props: {
      allProducts,
      allCategories,
    },
  };
}

export default function Home({ allProducts, allCategories }) {
  const [category, setCategory] = useState("all");
  console.log(category);
  return (
    <Layout>
      <div>
        <h2>Products</h2>
        <Filter
          allCategories={allCategories}
          category={category}
          setCategory={setCategory}
        />
        <ul>
          {allProducts
            .filter(
              (product) => category === "all" || product.category === category
            )
            .map((product) => (
              <li key={product.id}>
                <Image
                  src={product.photo_url}
                  alt=""
                  width={100}
                  height={100}
                />
                <h3 className="index-product-h3">{product.name}</h3>
                <p className="index-product-price">£{product.price}</p>
                <button>Add to basket</button>
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  );
}
