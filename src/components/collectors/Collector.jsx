import classNames from "classnames";
import styles from "./Collector.module.scss";
import User from "../user/User";
import CollectorColumn from "./CollectorColumn";
import { style } from "@mui/material/node_modules/@mui/system";

export default function Collector({items = [
    {
      name: "String",
      nftsCount: "Number",
      avatar: "String",
      verified: "Boolean",
      id: "Number",
    },
  ],type}) {
  
  return (
    <div className={classNames(styles.container)}>
    <CollectorColumn type = {styles.lighter ? 'light' : 'dark'} ></CollectorColumn>
    </div>
  );
}
