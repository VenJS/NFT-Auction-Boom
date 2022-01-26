import classNames from "classnames";
// import styles from "./Collector.module.scss";
import User from "../user/User";
import CollectorColumn from "./CollectorColumn";

export default function Collector({ item, type, index }) {
  return (
    <div className={type}>
      <table>
        <tbody>
          <tr>
            <td>{index}</td>
            <td>{item.id}</td>
            <td>{item.avatar}</td>
            <td>{item.name}</td>
            <td>{item.nftsCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
