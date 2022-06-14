import Layout from "../components/Layout";
/* import Image from "next/image";
import styles from "../styles/Home.module.css"; */

export default function Home() {
  return (
    <Layout>
      <div>
        <h2>Products</h2>
        <ul>
          <li>
            <h3>Product 1</h3>
          </li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </div>
    </Layout>
  );
}
