import Header from "../../../src/components/header/Header";
import ProfileHero from "../../../src/components/profile/ProfileHero";
import ProfileUser from "../../../src/components/profile/ProfileUser";
import ProfileCollection from "../../../src/components/profile/ProfileCollection";
import Footer from "../../../src/components/footer/Footer";
import profile from "../../../data/profile.json";
import classNames from "classnames";
import styles from "./ProfilePage.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Profile() {
  let url = process.env.apiUrl;

  const router = useRouter();

  const [profile, setProfile] = useState();
  const [profileFilters, setProfileFilters] = useState();

  useEffect(async () => {
    const result = await axios.get(
      "https://nft-auction.herokuapp.com/users/401"
    );
    setProfile(result.data.user);
  }, []);

  useEffect(async () => {
    const result = await axios.get(
      "https://nft-auction.herokuapp.com/users/401"
    );
    setProfileFilters(result.data.filters);
  }, []);

  console.log(profile);
  console.log(profileFilters);

  return (
    <div className={classNames(styles.wrapper)}>
      <Header></Header>
      <ProfileHero></ProfileHero>
      <ProfileUser name={profile.name} info={profile.info}></ProfileUser>
      <ProfileCollection
        user={profile.name}
        filters={profileFilters}
      ></ProfileCollection>
      <Footer></Footer>
    </div>
  );
}
