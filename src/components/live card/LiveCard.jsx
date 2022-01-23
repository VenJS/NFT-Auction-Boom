import Card from "../card/Card";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import classNames from "classnames";
import styles from './LiveCard.module.scss'

export default function LiveCard() {
  return (
    <div>
      <div className={classNames(styles.Card_badge)}>
        <FiberManualRecordIcon></FiberManualRecordIcon>
        <span>LIVE</span>
      </div>
      <Card></Card>
    </div>
  );
}
