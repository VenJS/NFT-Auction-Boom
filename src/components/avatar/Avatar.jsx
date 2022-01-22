import styles from './Avatar.module.scss'
import classNames from 'classnames'

export default function Avatar({size, url, verified}) {
    return (
        <div className={classNames(styles.avatar)} style={{width: size || '90px', height: size || '90px'}} ver={verified}>
            <img className={classNames(styles.image)} src={url} ></img>
            <img className={classNames(styles.badge)} src='images/verified.svg'></img>
        </div>
    )
    
}