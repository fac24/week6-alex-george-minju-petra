import { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Filter from "../components/Filter";
import Link from "next/link";
import { getAllProducts } from "../database/model";
import { getAllCategories } from "../database/model.js";
import indexImg from "../public/assets/sectech.png";

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

export default function Home({
  allProducts,
  allCategories,
  basket,
  setCartTotal,
  cartTotal,
}) {
  const [category, setCategory] = useState("all");
  const [text, setText] = useState("");
  const [sortPrice, setSortPrice] = useState("highest");

  return (
    <Layout basket={basket} cartTotal={cartTotal} setCartTotal={setCartTotal}>
      <div className=" container flex flex-row mt-17 h-100 mx-auto p-5 justify-between">
        <div className="w-2/5 flex flex-col justify-center ml-20">
          <h2 className="text-4xl text-gray-600  md:text-left mb-6 mt-10 font-medium">
            SecTech
          </h2>
          <p className="uppercase text-gray-600 tracking-wide md:text-left">
            Shop more sustainably with second-hand electronic devices from your
            favourite brands.
          </p>
          <Link href="/">
            <span className=" rounded-full bg-blue-200 p-3 hover:bg-purple-400 py-4 px-8 uppercase text-sm self-start mt-12 font-medium cursor-pointer">
              Shop now
            </span>
          </Link>
        </div>
        <div className="w-3/5 ml-24">
          <Image src={indexImg} alt="" width={500} height={400} />
        </div>
      </div>

      <div className=" container mt-17 mx-auto p-5">
        <h2 className="text-3xl text-gray-600 mb-4 mt-4 font-medium">
          Products
        </h2>
        <Filter
          allCategories={allCategories}
          category={category}
          setCategory={setCategory}
          text={text}
          setText={setText}
          sortPrice={sortPrice}
          setSortPrice={setSortPrice}
        />
        <ul className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16">
          {allProducts
            .filter(
              (product) =>
                text === "" ||
                product.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter(
              (product) => category === "all" || product.category === category
            )
            .sort((productA, productB) => {
              if (sortPrice === "highest") {
                return productB.price - productA.price;
              } else if (sortPrice === "lowest") {
                return productA.price - productB.price;
              }
            })
            .map((product) => {
              const href = `/products/${product.id}`;
              return (
                <li
                  key={product.id}
                  className="shadow-md rounded-lg p-5 flex flex-col"
                >
                  <Link href={href}>
                    <a>
                      <Image
                        src={product.photo_url}
                        alt=""
                        width={300}
                        height={300}
                        className="rounded-lg self-center"
                      />
                      <p className="index-product-h3 text-lg font-semibold text-gray-700 pt-3 pb-5 mt-3 mb-2">
                        {product.name}{" "}
                      </p>
                    </a>
                  </Link>
                  <div className="flex flex-row justify-between content-center h-15">
                    <p className="index-product-price font-semibold inline-block mr-2 text-gray-700 text-base py-2 ">
                      £{product.price}
                    </p>

                    <Link href="/">
                      <div className="flex flex-row bg-purple-200 rounded-full p-4 hover:bg-purple-400 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 inline-block mr-2 text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                        <a className="text-gray-700 mr-2 ml-1 text-xs font-semibold">
                          Add To Basket
                        </a>
                      </div>
                    </Link>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </Layout>
  );
}
