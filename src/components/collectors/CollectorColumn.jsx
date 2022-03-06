import classNames from "classnames";
import styles from "./CollectorColumn.module.scss";
import Collector from "./Collector.jsx";
export default function CollectorColumn({
  items = [
    {
      name: "String",
      nftsCount: "Number",
      avatar: "String",
      verified: "Boolean",
      id: 8,
    },
    {
      name: "String",
      nftsCount: "Number",
      avatar: "String",
      verified: "Boolean",
      id: 5,
    },
    {
      name: "String",
      nftsCount: "Number",
      avatar: "String",
      verified: "Boolean",
      id: 10,
    },
  ],
}) {
  return (
    <div className={classNames(styles.container)}>
      {items.map((item, i) => (
        <Collector
          name={item.name}
          avatar={item.avatar}
          verified={item.verified}
          info={item.nftsCount}
          index={item.id}
          key={i}
          type={
            i % 2 !== 0 ? classNames(styles.light) : classNames(styles.dark)
          }
        />
      ))}
    </div>
  );
}
