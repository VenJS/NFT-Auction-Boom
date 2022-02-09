import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import TopCollectors from "../src/components/collectors/TopCollectors";
import ProductContainer from "../src/components/product/ProductContainer/ProductContainer";

export default function Index() {
  return (
    <div>
      <Header />
      <Featured
        items={[
          {
            image:
              "https://images.unsplash.com/photo-1637317957434-16798e804fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
            title: "Breakfast",
            rows: 2,
            cols: 3,
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            title: "Burger",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1633294261565-04234dc78da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Camera",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            title: "Coffee",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1635244621620-ccadff2eb29d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Hats",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1625737186162-5766a7289b5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Honey",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1634689033402-a132c62b310e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: "Basketball",
            href: "/about",
          },
        ]}
      ></Featured>
      <Trending
        cards={["Bored Ape", "Gringo", "Mona Who", "Fashion Ape"]}
      ></Trending>
      <TopCollectors
        collectors={[
          {
            name: "G. K",
            nftsCount: "341",
            avatar: "String",
            verified: true,
          },
          {
            name: "Michael Poulsen",
            nftsCount: "168",
            avatar: "String",
            verified: true,
          },
          {
            name: "James Hetfield",
            nftsCount: "107",
            avatar: "String",
            verified: true,
          },
          {
            name: "Steven Tyler",
            nftsCount: 71,
            avatar: "String",
            verified: true,
          },
        ]}
      />
      <How></How>
      <Auctions cards={["BTC", "Kusama", "Tron", "PolkaDot"]}></Auctions>
      <Footer></Footer>
      <ProductContainer></ProductContainer>
    </div>
  );
}
