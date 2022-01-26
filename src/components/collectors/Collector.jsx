import classNames from "classnames";
import styles from "./Collector.module.scss";
import User from "../user/User";
import CollectorColumn from './CollectorColumn';

export default function Collector({type}) {
  
  return (
    <div className={classNames(styles.container)}>
    <CollectorColumn></CollectorColumn>
    </div>
  );
}
