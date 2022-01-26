import classNames from "classnames";
import styles from "./CollectorColumn.module.scss"


 function CollectorColumn({
    items = [
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
      }
    ],
  }) {
    const data = Array.from(items);
    return (
      <div className={classNames(styles.container)}>
      {data.map((item, i) => (
        <div key={i}
        className={
          i % 2 !== 0 ? classNames(styles.light) : classNames(styles.dark)
        }>
          <table><tbody>
                  <tr>
                      <th>{item.id}</th>
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

     function Collector({type}) {
      return (
        
        <div className={classNames(styles.container)}>
        <CollectorColumn></CollectorColumn>
        </div>
      );
    }
    
}

export default Collector;