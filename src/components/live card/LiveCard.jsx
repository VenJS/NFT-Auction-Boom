import Card from "../card/Card";
import Countdown from "react-countdown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import classNames from "classnames";
import styles from './LiveCard.module.scss'

export default function LiveCard() {
  return (
    <div>
      <div className={classNames(styles.badge)}>
        <FiberManualRecordIcon></FiberManualRecordIcon>
        <span>LIVE</span>
      </div>
      <Card timeLeft="10"></Card>
      <div className={classNames(styles.countdown)}>
      <Countdown date={Date.now() + 1000000}></Countdown>
      </div>
    </div>
  );
}
