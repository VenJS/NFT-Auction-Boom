import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import TopCollectors from "../src/components/collectors/TopCollectors";
import CollectorColumn from "../src/components/collectors/CollectorColumn";
import { useEffect, useState } from "react";

import dataFeatured from "../data/featured.json";
import dataProfile from "../data/profile.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState();

  let url = process.env.apiUrl;

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/featured")
      .then((response) => response.json())
      .then((res) => res.nfts);
    result[0].rows = 2;
    result[0].cols = 3;
    setFeaturedCards(result);
  }, []);

  return (
    <div>
      <Header />
      <Featured items={featuredCards}></Featured>
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
      <CollectorColumn></CollectorColumn>
    </div>
  );
}
