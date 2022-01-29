import classNames from "classnames";
import styles from './ProductInfoStatus.module.scss';
import { Chip } from "@mui/material";

export default function ProductInfoStatus() {
    return (
        <div className={classNames(styles['product-info-status'])}>
            <Chip className={classNames(styles.status)} label="live"></Chip>
        </div>
    )
}