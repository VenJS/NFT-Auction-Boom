import classNames from "classnames";
import styles from "./ProductTabs.module.scss";
import { TabContext } from "@mui/lab";
import User from "../user/User";
import { TableHead, TableRow, Box, Tabs, Tab, TableCell } from "@mui/material";

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
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs aria-label={text} value={text}>
            <Tab label="Details" className={classNames(styles["tab-details"])}>
              Details
            </Tab>
            <Tab label="Bids" className={classNames(styles["tab-bids"])}>
              Bids
            </Tab>
          </Tabs>
        </Box>

        <TableHead>
          {[bids].map((bid, i) => {
            <TableRow className={classNames(styles[`table-row-${i}`])}>
              <TableCell>
                <User name="Jonny"></User>
              </TableCell>
            </TableRow>;
          })}
        </TableHead>
      </TabContext>
    </div>
  );
}
