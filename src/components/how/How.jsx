import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Step from "./Step.jsx";
import classNames from "classnames";
import styles from "./How.module.scss";

export default function How({
  description = "Discover, collect and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are three things you will need in place to open your account and start buying or selling NFTs on BUM. ",
  title = "How it works",
  items = [
    {
      title: "Digital Currency",
      description:
        "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange.",
    },
    {
      title: "Crypto Wallet",
      description:
        "A crypto wallet such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain",
    },
    {
      title: "BUM.",
      description:
        "Let's connect your wallet to BUM, edit your profile and begin interacting in the space.",
    },
  ],
  link = "/how",
}) {
  return (
    <div style={{ maxHeight: "650px" }}>
      <div className={classNames(styles.container)}>
        <Grid
          container
          direction="column"
          spacing={1}
          sx={{ paddingLeft: "7rem" }}
        >
          <Grid item xs={4} className={classNames(styles.title)}>
            {title}
          </Grid>
          <Grid item xs={4} className={classNames(styles.text)}>
            {description}
          </Grid>
          <Grid item xs={4}>
            <Button
              className={classNames(styles.button)}
              onClick={() => (window.location.href = "/how")}
            >
              LEARN MORE
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classNames(styles.steps)}>
        <Grid
          container
          spacing={2}
          direction="column"
          sx={{ alignItems: "flex-end" }}
        >
          {items.map((item, i) => {
            return (
              <Grid item xs={4} key={i}>
                <Step
                  number={i + 1}
                  title={item.title}
                  description={item.description}
                ></Step>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
