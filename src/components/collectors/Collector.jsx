import User from "../user/User";
import classNames from "classnames";
import styles from "./Collector.module.scss";

export default function Collector({
  name,
  avatar,
  verified,
  info,
  type,
  index,
}) {
  return (
    <div className={classNames(styles.container)}>
      <table>
        <tbody>
          <tr>
            <td className={classNames(styles.index)}>{index}</td>
            <td>
              {
                <User
                  avatar={avatar}
                  name={name}
                  verified={verified}
                  info={info}
                ></User>
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
