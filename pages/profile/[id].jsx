import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";
import profile from "../../data/profile.json";
import classNames from "classnames";
import styles from "./[id].module.scss";
import { useState, useEffect } from "react";

export default function Profile() {
  let url = process.env.apiUrl;

  const [profile, setProfile] = useState();
  const [profileFilters, setProfileFilters] = useState();

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/users/367")
      .then((response) => response.json())
      .then((res) => res);
    setProfile(result);
  }, []);

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/users/367")
      .then((response) => response.json())
      .then((res) => res.filters);
    setProfileFilters(result);
  }, []);

  console.log(profile);
  console.log(profileFilters);
  return (
    <div className={classNames(styles.wrapper)}>
      <Header></Header>
      <ProfileHero></ProfileHero>
      <ProfileUser
        name="Ramsey"
        info="It is never crowded along the extra mile"
      ></ProfileUser>
      <ProfileCollection
        user={profile}
        filters={profileFilters}
      ></ProfileCollection>
      <Footer></Footer>
    </div>
  );
}
