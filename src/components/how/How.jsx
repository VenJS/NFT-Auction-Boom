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
        <Grid container direction='column'>
      <Grid item className={classNames(styles.title)}>{title}</Grid>
      <Grid item className={classNames(styles.text)}>
        {description}
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
