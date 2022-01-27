import classNames from "classnames";
import styles from "./CollectorColumn.module.scss";
import Collector from "./Collector.jsx";
export default function CollectorColumn({items = [
  {
    name: "String",
    nftsCount: "Number",
    avatar: "String",
    verified: "Boolean",
    id: "Number",
  },
  {
    name: "String",
    nftsCount: "Number",
    avatar: "String",
    verified: "Boolean",
    id: "Number",
  },
  {
    name: "String",
    nftsCount: "Number",
    avatar: "String",
    verified: "Boolean",
    id: "Number",
  },
]}) {
  

  return (
    <div className={classNames(styles.container)}>
      {items.map((item, i) => (
        <Collector
          key={i}
          item={item}
          index={i + 1}
          type={
            i % 2 !== 0 ? classNames(styles.light) : classNames(styles.dark)
          }
        />
      ))}
    </div>
  );
}
