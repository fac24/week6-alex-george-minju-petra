import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Filter from "../components/Filter";
import { getAllProducts } from "../database/model";

export async function getServerSideProps() {
  const allProducts = await getAllProducts();
  //if line 9 was a db request or something, it would need an await
  return {
    props: {
      allProducts,
    },
  };
}

export default function Home({ allProducts }) {
  return (
    <Layout>
      <Filter></Filter>
      <div>
        <h2>Products</h2>
        form
        <ul>
          {allProducts.map((product) => (<li key={product.id}>
            <Image
              src={product.photo_url}
              height={144}
              width={144}
              alt=''
            />
            <h3 className="index-product-h3">{product.name}</h3>
            <p className="index-product-price">£{product.price}</p>
            <button>Add to basket</button>
          </li>))
          }
        </ul>
      </div>
    </Layout>
  );
}
