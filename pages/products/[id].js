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
    productObj.pid = event.target.attributes.pid.value

    const newBasket = [...basket, productObj];
    localStorage.setItem("basket", newBasket.map((object) => JSON.stringify(object)).join(',,'))
    setBasket(newBasket)


    //const choosables = event.target.value;

  }
  console.log(productData);
  return (
    <Layout>
      <section>
        <Image
          src={productData.photo_url}
          alt="Picture of the product"
          width={500}
          height={500}
        />
        <h2>{productData.name}</h2>
        <p>£{productData.price}</p>
        {productData.stock < 3 ? (
          <h3 style={{ color: "red" }}>
            HURRY ONLY {productData.stock} LEFT IN STOCK
          </h3>
        ) : null}
        <form pid={productData.id} onSubmit={(event) => addToBasket(event)}>
          <Colours colours={productData.colours} />
          <Variants variants={productData.variants} />
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max={productData.stock}
            value="1"
          />
          {basket ? <button type="submit">Add to basket</button> : null}
        </form>
      </section>
      <section>
        <h2>Description:</h2> <p>{productData.description}</p>
        <h2>Brand:</h2>
        <p>{productData.brand}</p>
        <h2>Category:</h2>
        <p>{productData.category}</p>
      </section>
      <Link href="/">
        <a>Back To Home</a>
      </Link>
    </Layout>
  );
}
