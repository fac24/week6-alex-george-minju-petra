import { getProductById, getAllProductIds } from "../../database/model.js";
import Layout from "../../components/Layout.js";
import Image from "next/image";
import Colours from "../../components/Colours.js";
import Variants from "../../components/Variants.js";
import Link from "next/link.js";
import useLocalArray from "../../components/hooks/useLocalArray.js";

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

export default function Products({ productData }) {
  const [basket, setBasket] = useLocalArray("basket");

  function addToBasket(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const productObj = Object.fromEntries(data.entries());
    productObj.pid = event.target.attributes.pid.value;

    const newBasket = [...basket, productObj];
    localStorage.setItem(
      "basket",
      newBasket.map((object) => JSON.stringify(object)).join(",,")
    );
    setBasket(newBasket);
  }

  return (
    <Layout>
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
              value="1"
              className="indent-4 md:indent-0"
            />
            {basket ? (
              <button
                className="bg-purple-200 text-xl rounded-full p-4 hover:bg-purple-400 mt-2"
                type="submit"
              >
                Add to basket
              </button>
            ) : null}
          </form>
        </div>
      </section>
      <section className="container m-auto p-10 pt-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl">Description:</h2>
          <p className="indent-2 px-4"> {productData.description}</p>
          <h2 className="text-xl">Brand:</h2>
          <p className="indent-2 px-4">{productData.brand}</p>
          <h2 className="text-xl">Category:</h2>
          <p className="indent-2 px-4">{productData.category}</p>
        </div>
      </section>
      <Link href="/">
        <a>Back To Home</a>
      </Link>
    </Layout>
  );
}
