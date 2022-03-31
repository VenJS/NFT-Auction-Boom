import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Footer from "../../src/components/footer/Footer";
import { Container, Grid } from "@mui/material";
import nfts from "../../data/nfts.json";
import { useState, useEffect } from "react";
import ExploreCards from "../../src/components/explore/ExploreCards";

export default function Explore() {
  let url = process.env.apiUrl;

  const [nfts, setNfts] = useState();
  const [nftFilters, setNftFilters] = useState();
  const [nftPrices, setNftPrices] = useState();

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/explore")
      .then((response) => response.json())
      .then((res) => res.nfts);
    setNfts(result);
  }, []);

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/explore")
      .then((response) => response.json())
      .then((res) => res.filters.sort);
    setNftFilters(result);
  }, []);

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/explore")
      .then((response) => response.json())
      .then((res) => res.filters.price);
    setNftPrices(result);
  }, []);

  return (
    <div>
      <Header></Header>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={3}>
            <ExploreTitle></ExploreTitle>
          </Grid>
          <Grid item xs={7}>
            <ExploreFilters
              filters={nftFilters}
              prices={nftPrices}
            ></ExploreFilters>
          </Grid>
        </Grid>
        <ExploreCards cards={nfts}></ExploreCards>
      </Container>
      <Footer></Footer>
    </div>
  );
}
