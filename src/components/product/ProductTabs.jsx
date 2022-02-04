import classNames from "classnames";
import styles from "./ProductTabs.module.scss";
import { TabContext } from "@mui/lab";
import User from "../user/User";
import { TableHead, TableRow, Box, Tabs, Tab } from "@mui/material";

export default function ProductTabs({
  text,
  bids = [
    {
      user: { avatar: "String", name: "String", verified: true },
      amount: 4,
      date: "String",
    },
  ],
}) {
  return (
    <div className={classNames(styles["product-tabs"])}>
      <TabContext value="sadsadsa">
        <User name="Jonny"></User>
        <User name="Ronny"></User>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs aria-label={text}>
            <Tab
              label="Details"
              className={classNames(styles["tab-details"])}
            />
            <Tab label="Bids" className={classNames(styles["tab-bids"])} />
          </Tabs>
        </Box>
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
