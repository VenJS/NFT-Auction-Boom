import Card from "../card/Card";
import { Select } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

export default function Trending({ cards = [""] }) {
  return (
    <Container maxWidth="false">
      <Grid container spacing={10}>
        <Grid item xs={3}>
          <Card />
          <Select />
        </Grid>
        <Grid item xs={3}>
          <Card />
          <Select />
        </Grid>
        <Grid item xs={3}>
          <Card />
          <Select />
        </Grid>
        <Grid item xs={3}>
          <Card />
          <Select />
        </Grid>
      </Grid>
    </Container>
  );
}
