import Avatar from "../avatar/Avatar"
import styles from './User.module.scss'
import classNames from "classnames"

export default function User({name='', info='', avatar='', size=55, verified=false}) {
    return (
        <div className={classNames(styles.name)}>
            <div className={classNames(styles.userName)}>{name}</div>
            <div className={classNames(styles.userInfo)}>{info}</div>
            <Avatar url='images/avatar.png' />
        </div>
    )
}