import Header from '../../src/components/header/Header';
import ProfileHero from '../../src/components/profile/ProfileHero';
import ProfileUser from '../../src/components/profile/ProfileUser';
import ProfileCollection from '../../src/components/profile/ProfileCollection';
import Footer from '../../src/components/footer/Footer';
import profile from '../../data/profile.json';
import classNames from 'classnames';
import styles from './[id].module.scss'


export default function Profile() {
    return (
        <div className={classNames(styles.wrapper)}>
            <Header></Header>
            <ProfileHero image='https://images3.alphacoders.com/853/thumb-1920-85305.jpg'></ProfileHero>
            <ProfileUser name='Ramsey' info='It is never crowded along the extra mile' avatar= 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png'></ProfileUser>
            <ProfileCollection></ProfileCollection>
            <Footer></Footer>
        </div>
    )
}