import classNames from "classnames";
import styles from "./CollectorColumn.module.scss";
import Collector from "./Collector.jsx";
export default function CollectorColumn({items = [
  {
    name: "String",
    nftsCount: "Number",
    avatar: "String",
    verified: "Boolean",
    id: 1,
  },
  {
    name: "String",
    nftsCount: "Number",
    avatar: "String",
    verified: "Boolean",
    id: 2,
  },
  {
    name: "String",
    nftsCount: "Number",
    avatar: "String",
    verified: "Boolean",
    id: 3,
  },
]}) {
  

  return (
    <div className={classNames(styles.container)}>
      {items.map((item, i) => (
        <Collector
          key={i}
          item={item}
          type={
            i % 2 !== 0 ? classNames(styles.light) : classNames(styles.dark)
          }
        />
      ))}
    </div>
  );
}
