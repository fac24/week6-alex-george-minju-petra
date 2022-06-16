import "../styles/globals.css";
import useLocalArray from "../components/hooks/useLocalArray.js";

function MyApp({ Component, pageProps }) {
  const [basket, setBasket] = useLocalArray("basket");
  return <Component {...pageProps} basket={basket} setBasket={setBasket} />;
}

export default MyApp;
