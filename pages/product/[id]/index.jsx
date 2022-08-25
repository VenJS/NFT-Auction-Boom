import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProductContainer from "../../../src/components/product/ProductContainer";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const id = router.query.id;

  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchedData = async () => {
      const result = await axios.get("https://nft-auction.herokuapp.com/nfts");
      console.log(id);
      console.log(result.data);
      console.log(result.data[`${id}`]);
      setProduct(result.data[`${id}`]);
    };
    fetchedData();
  }, []);

  console.log(product);

  return (
    <div>
      <Header></Header>
      <ProductContainer
      // name={product.name}
      // owner={product.owner.username}
      // price={product.price}
      // currency={product.currency}
      // likes={product.likes}
      // auction_end={product.auction_end}
      // details={product.details}
      // bids={product.bids}
      // source={product.image}
      ></ProductContainer>
      <Footer></Footer>
    </div>
  );
}
