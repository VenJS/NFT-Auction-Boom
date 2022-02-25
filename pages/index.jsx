import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import TopCollectors from "../src/components/collectors/TopCollectors";
import CollectorColumn from "../src/components/collectors/CollectorColumn";
import { useEffect, useState } from "react";
import axios from "axios";

import dataFeatured from "../data/featured.json";
import dataProfile from "../data/profile.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState();

  useEffect(async () => {
    const result = await axios("https://nft-auction.herokuapp.com/featured");
    setFeaturedCards(result.data.nfts);
  }, []);

  console.log(featuredCards);

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
