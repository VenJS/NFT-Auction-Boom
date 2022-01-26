import classNames from "classnames";
import styles from "./CollectorColumn.module.scss"

export default function CollectorColumn({
    items = [
      {
        name: "String",
        nftsCount: "Number",
        avatar: "String",
        verified: "Boolean",
        id: "Number",
      },
    ],
  }) {
    const data = Array.from(items);
    return (
      <div className={classNames(styles.container)}>
      {data.map((item, i) => (
        <div key={i}
        className={
          i % 2 !== 0 ? classNames(styles.lighter) : classNames(styles.darker)
        }>
          <table ><tbody>
                  <tr>
                      <th className={classNames(styles.id)}>{item.id}</th>
                      <th>{item.avatar}</th>
                      <th>{item.name}</th>
                      <th>{item.nftsCount}</th>
                  </tr>
              </tbody>
          </table>
          </div>
      ))}
    </div>
    )

    
}