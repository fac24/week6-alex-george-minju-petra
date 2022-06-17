import { getProductById } from "../../database/model.js";
import Layout from "../../components/Layout.js";
import Image from "next/image";
import Colours from "../../components/Colours.js";
import Variants from "../../components/Variants.js";
//import AddBasketButton from "../../components/AddBasketButton.js";
import Link from "next/link.js";
import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

/* export async function getStaticPaths() {
  const paths = await getAllProductIds();

  return {
    paths,
    fallback: false,
  };
} */

export async function getServerSideProps({ params }) {
  const productData = (await getProductById(params.id)) || null;
  console.log(productData);
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
  sale,
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
  if (!productData)
    return (
      <>
        <section className="container m-auto mt-5 p-10 pb-2">
          <div className="flex flex-row">
            <h2 className="text-2xl md:text-4xl">
              There are no products with this id
            </h2>
          </div>
        </section>
        <section className="container m-auto p-10 pt-2 flex flex-col gap-4">
          <Link href="/">
            <a className="text-xl mt-4">Back To Homepage</a>
          </Link>
        </section>
      </>
    );
  return (
    <>
      <section className="container m-auto mt-5 p-10 pb-2">
        <div className="flex flex-col md:flex-row">
          <Image
            src={productData.photo_url}
            alt="Picture of the product"
            width={500}
            height={500}
            className="h-48 w-full object-contain md:h-full md:w-48"
          />
          <div className="flex flex-col m-10 gap-4">
            <h2 className="text-2xl md:text-4xl">{productData.name}</h2>
            <p className="text-2xl">
              {sale === productData.id ? (
                <>
                  <s>£{productData.price}</s>{" "}
                  <b className="text-red-400 font-extrabold">
                    £{(productData.price * 0.8).toFixed(2)}
                  </b>{" "}
                </>
              ) : (
                <>£{productData.price}</>
              )}
            </p>
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
              className="indent-4 md:indent-0 border-solid border-2 border-blue-200 w-44 ml-2 rounded-md p-4 "
              onChange={(event) => setQuantity(event.target.value)}
            />
            {basket ? (
              <Popup
                trigger={
                  <button
                    className="bg-purple-200 text-xl rounded-full p-4 hover:bg-purple-400 mt-2 md:text-md"
                    type="submit"
                  >
                    Add to basket
                  </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal p-4">
                    <button
                      className="close text-4xl text-red-400"
                      onClick={close}
                    >
                      &times;
                    </button>
                    <h4 className="uppercase text-gray-600 tracking-wide items-center ">
                      {" "}
                      You have successfully added this product to your basket!
                    </h4>

                    <div
                      className=" flex flex-col gap-1 md:flex-row h-22 p-2 justify-around items-center"
                      key={productData.id}
                    >
                      <Image
                        src={productData.photo_url}
                        alt={productData.name}
                        width={200}
                        height={200}
                        className="rounded-lg object-contain"
                      />
                      <div className="flex flex-col">
                        <h2>{productData.name}</h2>
                        <span>£{productData.price}</span>
                      </div>
                    </div>
                    <div className="actions flex flex-col gap-4 md:flex-row md:justify-evenly  md:mb-8">
                      <Link href="/basket">
                        <a className=" rounded-full text-center bg-blue-200 p-3 hover:bg-purple-400 md:py-4 md:px-8 uppercase text-sm md:self-start md:mt-12 font-medium">
                          Go to checkout
                        </a>
                      </Link>
                      <Link href="/">
                        <a className=" rounded-full text-center bg-blue-200 p-3 hover:bg-purple-400 md:py-4 md:px-8 uppercase text-sm md:self-start md:mt-12 font-medium">
                          Explore more
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
              </Popup>
            ) : null}
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
    </>
  );
}
