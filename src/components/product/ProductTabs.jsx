import classNames from "classnames";
import styles from "./ProductTabs.module.scss";
import { TabContext } from "@mui/lab";
import User from "../user/User";
import { TableRow, Box, Tabs, Tab, TableCell } from "@mui/material";
import { useState } from "react";
import formatDistance from "date-fns/formatDistance";
import parseISO from "date-fns/parseISO";

export default function ProductTabs({
  text = "asdsad",
  bids = [
    {
      user: { avatar: "String", name: "Jonny", verified: true },
      amount: "4 ETH",
      date: "2022-02-06T22:18:15",
    },
    {
      user: { avatar: "String", name: "Ronny", verified: true },
      amount: "1 ETH",
      date: "2021-08-11T11:30:30",
    },
  ],
}) {
  const [selectedTab, setSelectedTab] = useState();

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setSelectedTab(newValue);
  };

  return (
    <div className={classNames(styles["product-tabs"])}>
      <TabContext value="0">
        <Box sx={{ borderBottom: 3 }}>
          <Tabs value={selectedTab} onChange={handleChange}>
            <Tab
              label="Details"
              className={classNames(styles["tab-details"])}
            ></Tab>
            <Tab label="Bids" className={classNames(styles["tab-bids"])}></Tab>
          </Tabs>
        </Box>
      </TabContext>
      {bids.map((bid, i) => (
        <TableRow className={classNames(styles[`table-row-${i}`])}>
          {i % 2 !== 0 ? (
            <TableRow className={classNames(styles.light)}>
              <TableCell className={classNames(styles.name)}>
                <User name={bid.user.name}></User>
              </TableCell>
              <TableCell>
                <span className={classNames(styles.amount)}>{bid.amount}</span>
              </TableCell>
              <TableCell>
                <span className={classNames(styles.date)}>
                  {formatDistance(parseISO(bid.date), new Date(), {
                    includeSeconds: true,
                  })}{" "}
                  ago
                </span>
              </TableCell>
            </TableRow>
          ) : (
            <TableRow className={classNames(styles.dark)}>
              <TableCell className={classNames(styles.name)}>
                <User name={bid.user.name}></User>
              </TableCell>
              <TableCell>
                <span className={classNames(styles.amount)}>{bid.amount}</span>
              </TableCell>
              <TableCell>
                <span className={classNames(styles.date)}>
                  {formatDistance(parseISO(bid.date), new Date(), {
                    includeSeconds: true,
                  })}{" "}
                  ago
                </span>
              </TableCell>
            </TableRow>
          )}
        </TableRow>
      ))}
    </div>
  );
}
