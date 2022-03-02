import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Footer from "../../src/components/footer/Footer";
import { Container, Grid } from "@mui/material";
import Card from "../../src/components/card/Card";
import nfts from "../../data/nfts.json";
import { useState, useEffect } from "react";

export default function Explore() {
  let url = process.env.apiUrl;

  const [nfts, setNfts] = useState();
  const [nftFilters, setNftFilters] = useState();

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/explore")
      .then((response) => response.json())
      .then((res) => res.nfts);
    setNfts(result);
  }, []);

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/explore")
      .then((response) => response.json())
      .then((res) => res.filters);
    setNftFilters(result);
  }, []);

  console.log(nfts);

  return (
    <div>
      <Header></Header>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item>
            <ExploreTitle></ExploreTitle>
            <ExploreFilters filters={nftFilters} nfts={nfts}></ExploreFilters>
          </Grid>
          <Grid item>
            <Card></Card>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
}
