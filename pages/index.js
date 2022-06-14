import Layout from "../components/Layout";
/* import Image from "next/image";
import styles from "../styles/Home.module.css"; */

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold underline">Products</h1>
        <ul>
          <li className="text-md font-bold ">Product 1</li>
          <li className="text-md font-bold ">Product 2</li>
          <li className="text-md font-bold ">Product 3</li>
        </ul>
      </div>
    </Layout>
  );
}
