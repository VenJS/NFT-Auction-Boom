import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";
import profile from "../../data/profile.json";
import classNames from "classnames";
import styles from "./[id].module.scss";

export default function Profile() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Header></Header>
      <ProfileHero></ProfileHero>
      <ProfileUser
        name="Ramsey"
        info="It is never crowded along the extra mile"
      ></ProfileUser>
      <ProfileCollection></ProfileCollection>
      <Footer></Footer>
    </div>
  );
}
