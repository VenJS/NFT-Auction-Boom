import classNames from "classnames"
import styles from './ProductImage.module.scss'

export default function ProductImage() {
    return (
        <div className={classNames(styles.product-image)}>
            <img className={classNames(styles.image)} src="https://wp-assets.futurism.com/2021/11/we-read-that-bonkers-viral-nft-divorce-rant-so-you-didnt-have-to.jpg" />
        </div>
    )
}