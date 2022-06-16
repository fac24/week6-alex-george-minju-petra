import { getProductById, getAllProductIds } from "../../database/model.js";
import Layout from "../../components/Layout.js";
import Image from "next/image";
import Colours from "../../components/Colours.js";
import Variants from "../../components/Variants.js";
import AddBasketButton from "../../components/addBasketButton.js";
import Link from "next/link.js";
import { useState } from "react";

export async function getStaticPaths() {
  const paths = await getAllProductIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productData = await getProductById(params.id);
  return {
    props: {
      productData,
    },
  };
}

export default function Products({
  productData,
  cartTotal,
  setCartTotal,
  basket,
  setBasket,
}) {
  const [quantity, setQuantity] = useState(1);
  function addToBasket(event) {
    event.preventDefault();
    let nrOfItems = parseInt(event.target.querySelector("#quantity").value);
    setCartTotal(cartTotal + nrOfItems);
    const data = new FormData(event.target);
    const productObj = Object.fromEntries(data.entries());
    productObj.pid = productData;
    productObj.totalPrice = (
      productObj.pid.price * productObj.quantity
    ).toFixed(2);

    setBasket([...basket, productObj]);
  }

  return (
    <Layout basket={basket} cartTotal={cartTotal} setCartTotal={setCartTotal}>
      <section className="container m-auto mt-5 p-10 pb-2">
        <div className="flex flex-row">
          <Image
            src={productData.photo_url}
            alt="Picture of the product"
            width={500}
            height={500}
            className="h-48 w-full object-contain md:h-full md:w-48"
          />
          <div className="flex flex-col m-10 gap-4">
            <h2 className="text-2xl md:text-4xl">{productData.name}</h2>
            <p className="text-2xl">£{productData.price}</p>
            {productData.stock < 3 ? (
              <h3 className="text-red-600 text-xl">
                HURRY ONLY {productData.stock} LEFT IN STOCK
              </h3>
            ) : null}
          </div>
        </div>
        <div className="m-auto mt-5">
          <form
            pid={productData.id}
            onSubmit={(event) => addToBasket(event)}
            className=" flex flex-col md:flex-row justify-between gap-4"
          >
            <Colours colours={productData.colours} />
            <Variants variants={productData.variants} />
            <label htmlFor="quantity" className="text-lg py-4">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max={productData.stock}
              value={quantity}
              className="indent-4 md:indent-0"
              onChange={(event) => setQuantity(event.target.value)}
            />
            {basket ? (
              <button
                className="bg-purple-200 text-xl rounded-full p-4 hover:bg-purple-400 mt-2 md:text-md"
                type="submit"
              >
                Add to basket
              </button>
            ) : /* <AddBasketButton
                cartTotal={cartTotal}
                setCartTotal={setCartTotal}
              /> */ //}
            null}
          </form>
        </div>
      </section>
      <section className="container m-auto p-10 pt-2 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl">Description:</h2>
          <p className="indent-2 px-4"> {productData.description}</p>
          <h2 className="text-xl">Brand:</h2>
          <p className="indent-2 px-4">{productData.brand}</p>
          <h2 className="text-xl">Category:</h2>
          <p className="indent-2 px-4">{productData.category}</p>
        </div>
        <Link href="/">
          <a className="text-xl mt-4"> 🔙 Back To Home</a>
        </Link>
      </section>
    </Layout>
  );
}
