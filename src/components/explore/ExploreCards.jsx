import { Grid } from "@mui/material";
import Card from "../card/Card";

export default function ExploreCards({ cards = [] }) {
  return (
    <div>
      <Grid container spacing={2} sx={{ marginBottom: "100px" }}>
        {cards.map((arr, i) => (
          <Grid item key={i}>
            <Card
              name={arr.name}
              like={arr.likes}
              mediaUrl={arr.mediaUrl}
              timeLeft={arr["auction_end"]}
              price={arr.price}
              currency={arr.currency}
              user={arr.owner}
            ></Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
