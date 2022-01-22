import styles from './Avatar.module.scss'
import classNames from 'classnames'

export default function Avatar({size='90px', url, verified='false'}) {
    return (
        <div className={classNames(styles.avatar)} style={{width: size, height: size}} ver={verified}>
            <img className={classNames(styles.image)} src={url} ></img>
            <img className={classNames(styles.badge)} src='images/verified.svg'></img>
        </div>
    )
}