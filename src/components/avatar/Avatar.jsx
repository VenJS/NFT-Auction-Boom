import styles from './Avatar.module.scss'
import classNames from 'classnames'

export default function Avatar({size, url, verified}) {
    return (
        <container className={classNames(styles.avatar)} style={{width: {size}, height: {size}}} verified={verified}>
            <img className={classNames(styles.image)} src={url} ></img>
            {verified == 'true' ? <img className={classNames(styles.badge)} src='images/verified.svg'></img> : null }
        </container>
    )
}