import styles from './Avatar.module.scss'
import classNames from 'classnames'

export default function Avatar({size, url, verified}) {
    return (
        <container className={classNames(styles.avatar)} width={size} height={size}>
            <img className={classNames(styles.image)} src={url} ></img>
            <img className={classNames(styles.badge)} src='images/verified.svg'></img>
        </container>
    )
}