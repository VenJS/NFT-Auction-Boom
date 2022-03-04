import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProductContainer from "../../../src/components/product/ProductContainer";
import dataNfts from "../../../data/nfts.json";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Page() {
  const router = useRouter();

  let url = process.env.apiUrl;

  const [product, setProduct] = useState();

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/nfts/367")
      .then((response) => response.json())
      .then((res) => res);
    setProduct(result);
  }, []);

  return (
    <div>
      <Header></Header>
      <ProductContainer product={product}></ProductContainer>
      <Footer></Footer>
    </div>
  );
}
