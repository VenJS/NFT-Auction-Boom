import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";
import { useState, useEffect } from "react";

export default function Activity({ name, mediaU }) {
  let url = process.env.apiUrl;

  const [activity, setActivity] = useState();
  const [activityFilters, setActivityFilters] = useState();

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/activities")
      .then((response) => response.json())
      .then((res) => res.activities);
    setActivity(result);
  }, []);

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/activities")
      .then((response) => response.json())
      .then((res) => res.filters.sort);
    setActivityFilters(result);
  }, []);

  return (
    <div>
      <Header></Header>
      <Hero text="Activity" />
      <ActivityFilters filters={activityFilters}></ActivityFilters>
      <ActivityList items={activity}></ActivityList>
      <Footer></Footer>
    </div>
  );
}
