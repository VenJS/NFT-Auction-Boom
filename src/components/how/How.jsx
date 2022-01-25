import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import Step from "./Step.jsx"
import classNames from "classnames";
import styles from "./How.module.scss";


export default function How({
  description = "String",
  title = "String",
  items = [],
  link = "https://www.youtube.com/",
}) {
  return (
    <div className={classNames(styles.container)}>
        <Grid container>
      <Grid item className={classNames(styles.title)}>How it works</Grid>
      <Grid item className={classNames(styles.text)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste in unde
        vero maiores. Nemo nihil quibusdam tenetur ipsum quas nisi earum
        laboriosam soluta itaque possimus natus laborum voluptate, voluptas et!
      </Grid>
      <Grid item>
      <Button className={classNames(styles.button)} href={link}>
        LEARN MORE
      </Button>
      
      </Grid>
      {items.map((items, i) => {
        return <Step></Step>
      })}
      </Grid>
      
    </div>
  );
}
