import classNames from "classnames";
import styles from "./Collector.module.scss";
import User from "../user/User";

export default function Collector({
  items = [
    {
      name: "String",
      nftsCount: "Number",
      avatar: <User></User>,
      verified: "Boolean",
      id: "Number",
    },
    {
      name: "String",
      nftsCount: "Number",
      avatar: <User></User>,
      verified: "Boolean",
      id: "Number",
    },
  ],
  type,
}) {
  const data = Array.from(items);
  return (
    <div className={classNames(styles.container)}>
      {data.map((item, i) => (
        <div
          key={i}
          className={
            i % 2 !== 0 ? classNames(styles.lighter) : classNames(styles.darker)
          }
        >
          <table>
              <thread>
                  <tr>
                      <th className={classNames(styles.id)}>{item.id}</th>
                      <th>{item.avatar}</th>
                      <th>{item.name}</th>
                      <th>{item.nftsCount}</th>
                  </tr>
              </thread>
          </table>
          </div>
      ))}
    </div>
  );
}
