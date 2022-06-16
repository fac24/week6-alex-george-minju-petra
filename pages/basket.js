import Layout from "../components/Layout";
import { getAllProducts } from "../database/model";
import useLocalArray from "../components/hooks/useLocalArray.js";

export async function getServerSideProps() {
    const allProducts = await getAllProducts();
    return {
        props: {
            allProducts,
        },
    };
}

export default function Basket() {
    const [basket, setBasket] = useLocalArray("basket")


    return (
        <Layout>

        </Layout>
    )
}

//number, variant, colour, price, name

// total price, checkout