import { Grid } from "@mui/material";
import classNames from "classnames";
import styles from "./Step.module.scss";

export default function Step({
  number = "String",
  title = "String",
  description = "String",
}) {
  return (
    <div>
      <Grid container className={classNames(styles.container)}>
        <Grid item className={classNames(styles.wrapper)}>
          <div className={classNames(styles.number)}>{number}</div>
          <div className={classNames(styles.p)}>
            <h1 className={classNames(styles.title)}>{title}</h1>
            <p className={classNames(styles.span)}>{description}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
