import classNames from "classnames";
import styles from "./CollectorColumn.module.scss";
import Collector from "./Collector.jsx";

export default function CollectorColumn({ items = [], index }) {
  return (
    <div className={classNames(styles.container)}>
      {items.map((item, i) => (
        <Collector
          name={item.name}
          avatar={item.avatar.url}
          verified={item.verified}
          info={item.nftsCount}
          index={index}
          key={i}
          type={index % 2 !== 0 ? "dark" : "light"}
        />
      ))}
    </div>
  );
}
