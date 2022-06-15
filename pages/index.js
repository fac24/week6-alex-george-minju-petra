import { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Filter from "../components/Filter";
import Link from "next/link";
import { getAllProducts } from "../database/model";
import { getAllCategories } from "../database/model.js";

export async function getServerSideProps() {
  const allProducts = await getAllProducts();
  const allCategories = await getAllCategories();
  return {
    props: {
      allProducts,
      allCategories,
    },
  };
}

export default function Home({ allProducts, allCategories }) {
  const [category, setCategory] = useState("all");
  const [text, setText] = useState("");
  const [sortPrice, setSortPrice] = useState("highest")
  console.log(category);
  return (
    <Layout>
      <div>
        <h2>Products</h2>
        <Filter
          allCategories={allCategories}
          category={category}
          setCategory={setCategory}
          text={text}
          setText={setText}
          sortPrice={sortPrice}
          setSortPrice={setSortPrice}
        />
        <ul>
          {allProducts
            .filter(
              (product) => text === '' || product.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter(
              (product) => category === "all" || product.category === category
            )
            .sort((productA, productB) => {
              if (sortPrice === "highest") {
                return productB.price - productA.price
              } else if (sortPrice === "lowest") {
                return productA.price - productB.price
              }
            })
            .map((product) => (
              <li key={product.id}>
                <Link href={`products/${product.id}`}>
                  <a>
                    <Image
                      src={product.photo_url}
                      alt=""
                      width={100}
                      height={100}
                    />
                    <h3 className="index-product-h3">{product.name}</h3>
                  </a>
                </Link>
                <p className="index-product-price">£{product.price}</p>
                <button>Add to basket</button>


              </li>
            ))}
        </ul>
      </div>
    </Layout>
  );
}
