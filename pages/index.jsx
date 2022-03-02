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
  const [trendingItems, setTrendingItems] = useState();
  const [trendingFilters, setTrendingFilters] = useState();
  const [collectors, setCollectors] = useState();
  const [collectorFilters, setCollectorFilters] = useState();
  const [auctions, setAuctions] = useState();
  const [auctionFilters, setAuctionFilters] = useState();

  let url = process.env.apiUrl;

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/featured")
      .then((response) => response.json())
      .then((res) => res.nfts);
    result[0].rows = 2;
    result[0].cols = 3;
    setFeaturedCards(result);
  }, []);

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/trending")
      .then((response) => response.json())
      .then((res) => res.nfts);

    setTrendingItems(result);
  }, []);

  useEffect(async () => {
    const res = await fetch("https://nft-auction.herokuapp.com/trending")
      .then((response) => response.json())
      .then((result) => result.filters.sort);
    setTrendingFilters(res);
  }, []);

  useEffect(async () => {
    const result = await fetch(
      "https://nft-auction.herokuapp.com/top-collectors"
    )
      .then((response) => response.json())
      .then((res) => res.users);
    setCollectors(result);
  }, []);

  useEffect(async () => {
    const result = await fetch(
      "https://nft-auction.herokuapp.com/top-collectors"
    )
      .then((response) => response.json())
      .then((res) => res.filters);
    setCollectorFilters(result);
  }, []);

  useEffect(async () => {
    const result = await fetch(
      "https://nft-auction.herokuapp.com/live-auctions"
    )
      .then((response) => response.json())
      .then((res) => res.nfts);
    setAuctions(result);
  }, []);

  useEffect(async () => {
    const result = await fetch(
      "https://nft-auction.herokuapp.com/live-auctions"
    )
      .then((response) => response.json())
      .then((res) => res.filters);
    setAuctionFilters(result);
  }, []);

  return (
    <div>
      <Header />
      <Featured items={featuredCards}></Featured>
      <Trending cards={trendingItems} sort={trendingFilters}></Trending>
      <TopCollectors
        collectors={collectors}
        collectorFilters={collectorFilters}
      />
      <How></How>
      <Auctions cards={auctions} auctionFilters={auctionFilters}></Auctions>
      <Footer></Footer>
      <CollectorColumn></CollectorColumn>
    </div>
  );
}
