import styles from './Avatar.module.scss'
import classNames from 'classnames'

export default function Avatar({size= 90, url, verified=false}) {
    return (
        <div className={classNames(styles.avatar)} style={{width: size, height: size}} >
            <img className={classNames(styles.image)} src='images/avatar.png' ></img>
            <img className={classNames(styles.badge)} src='images/verified.svg' ver={verified}></img>
        </div>
    )
    
}