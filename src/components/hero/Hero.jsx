import classNames from "classnames"
import styles from '../hero/Hero.module.scss'
import { Typography } from "@mui/material"

export default function Hero({text = 'asdsa'}) {
    return (
        <div className={classNames(styles.hero)}>
           <Typography className={classNames(styles.text)} variant='h1'>{text}</Typography> 
        </div>
    )
}