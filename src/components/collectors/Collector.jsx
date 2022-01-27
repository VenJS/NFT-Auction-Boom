import User from "../user/User";
import classNames from "classnames";
import styles from './Collector.module.scss'

export default function Collector({ item, type, index }) {
  return (
    <div className={type}>
      <table>
        <tbody>
          <tr>
            <td className={classNames(styles.index)}>{item.id}</td>
            <td>{<User></User>}</td>
            <td>{item.name}</td>
            <td className={classNames(styles.nftsCount)}>{item.nftsCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
