import classNames from "classnames";
import styles from "./ProductTabs.module.scss";
import { TabContext } from "@mui/lab";
import User from "../user/User";
import { TableRow, Box, Tabs, Tab, TableCell } from "@mui/material";
import { useState } from "react";
import formatDistance from "date-fns/formatDistance";
import parseISO from "date-fns/parseISO";

export default function ProductTabs({
  text = "The god Bragi asks where a thundering sound is coming from, and says that the benches of Valhalla are creaking—as if the god Baldr had returned to Valhalla—and that it sounds like the movement of a thousand. Odin responds that Bragi knows well that the sounds are for Eric Bloodaxe, who will soon arrive in Valhalla. Odin tells the heroes Sigmund and Sinfjötli to rise to greet Eric and invite him into the hall, if it is indeed he.Sigmund asks Odin why he would expect Eric more than any other king, to which Odin responds that Eric has reddened his gore-drenched sword with many other lands. Eric arrives, and Sigmund greets him, tells him that he is welcome to come into the hall, and asks him what other lords he has brought with him to Valhalla. Eric says that with him are five kings, that he will tell them the name of them all, and that he, himself, is the sixth.",
  bids = [
    {
      user: { avatar: "String", name: "Jonny", verified: true },
      amount: "4 ETH",
      date: formatDistance(parseISO("2022-02-06T22:18:15"), new Date(), {
        includeSeconds: true,
      }),
    },
    {
      user: { avatar: "String", name: "Ronny", verified: true },
      amount: "1 ETH",
      date: formatDistance(parseISO("2021-08-11T11:30:30"), new Date(), {
        includeSeconds: true,
      }),
    },
  ],
}) {
  const [selectedTab, setSelectedTab] = useState();

  const handleChange = (event, newValue) => {
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
      {selectedTab === 0 && <p className={classNames(styles.text)}>{text}</p>}
      {selectedTab === 1 && (
        <table>
          {bids.map((bid, i) => (
            <TableRow className={`table-row-${i}`}>
              <div
                className={
                  i % 2 !== 0
                    ? classNames(styles.light)
                    : classNames(styles.dark)
                }
              >
                <TableCell className={classNames(styles.name)}>
                  <User name={bid.user.name}></User>
                </TableCell>
                <TableCell>
                  <span className={classNames(styles.amount)}>
                    {bid.amount}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={classNames(styles.date)}>
                    {bid.date} ago
                  </span>
                </TableCell>
              </div>
            </TableRow>
          ))}
        </table>
      )}
    </div>
  );
}
