import "../styles/globals.css";
import useLocalArray from "../components/hooks/useLocalArray.js";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [basket, setBasket] = useLocalArray("basket");
  const [cartTotal, setCartTotal] = useState(0);
  return (
    <Component
      {...pageProps}
      basket={basket}
      setBasket={setBasket}
      cartTotal={cartTotal}
      setCartTotal={setCartTotal}
    />
  );
}

export default MyApp;
