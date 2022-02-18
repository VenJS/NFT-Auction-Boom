import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Footer from "../../src/components/footer/Footer";
import { Container, Grid } from "@mui/material";
import Card from "../../src/components/card/Card";
import nfts from "../../data/nfts.json";

export default function Explore() {
  console.log(nfts);
  return (
    <div>
      <Header></Header>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item>
            <ExploreTitle></ExploreTitle>
            <ExploreFilters></ExploreFilters>
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
