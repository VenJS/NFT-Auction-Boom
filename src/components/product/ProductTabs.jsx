import classNames from "classnames";
import styles from "./ProductTabs.module.scss";
import { TabContext } from "@mui/lab";
import User from "../user/User";
import { TableHead, TableRow } from "@mui/material";
import { formatDistance, parseISO } from "date-fns";

export default function ProductTabs(
  text,
  bids = [
    {
      user: { avatar: "String", name: "String", verified: true },
      amount: 4,
      date: "String",
    },
  ]
) {
  return (
    <div className={classNames(styles["product-tabs"])}>
      <TabContext value="sadsadsa">
        <User name="Jonny"></User>
        <User name="Ronny"></User>
        <div className={classNames(styles["tab-details"])}>Details</div>
        <div className={classNames(styles["tab-bids"])}>Bids</div>
      </TabContext>
      <TableHead>
        {[bids].map((bid, i) => {
          <TableRow
            className={classNames(styles[`table-row-${i}`])}
          ></TableRow>;
        })}
      </TableHead>
    </div>
  );
}
