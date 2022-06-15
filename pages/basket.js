import Layout from "../components/Layout";
import { getAllProducts } from "../database/model";
import useLocalStorage from "../components/hooks/useLocalStorage.js";

export async function getServerSideProps() {
    const allProducts = await getAllProducts();
    return {
        props: {
            allProducts,
        },
    };
}

export default function Basket() {
    const [basket, setBasket] = useLocalStorage("basket")
    return (
        <Layout>

        </Layout>
    )
}

//number, variant, colour, price, name

// total price, checkout