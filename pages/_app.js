import "../styles/globals.css";
import useLocalArray from "../components/hooks/useLocalArray.js";
import { useState } from "react";
import Layout from "../components/Layout";
/* export async function getInitialProps() {
  App.getInitialProps(appContext);
  const ids = await getAllProductIds();
  console.log(ids);
  return {
    props: {
      ids,
    },
  };
} */

function MyApp({ Component, pageProps, ids }) {
  const [basket, setBasket] = useLocalArray("basket");
  const [cartTotal, setCartTotal] = useState(0);
  const [sale, setSale] = useState(0);
  console.log(ids);
  return (
    <Layout basket={basket} cartTotal={cartTotal} setCartTotal={setCartTotal}>
      <Component
        {...pageProps}
        basket={basket}
        setBasket={setBasket}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        sale={sale}
        setSale={setSale}
      />
    </Layout>
  );
}

export default MyApp;
