import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProductContainer from "../../../src/components/product/ProductContainer";
import dataNfts from '../../../data/nfts.json';
import { useRouter } from "next/router";

export default function Page() {

    const router = useRouter()

    return (
        <div>
            <Header></Header>
            <ProductContainer></ProductContainer>
            <Footer></Footer>
        </div>
    )
}