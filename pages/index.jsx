
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer"
import TopCollectors from "../src/components/collectors/TopCollectors";
import dataActivity from '../data/activity.json';
import dataFeatured from '../data/featured.json';
import dataNfts from '../data/nfts.json';
import dataProfile from '../data/profile.json';
import dataTrending from '../data/trending.json';
import dataUsers from '../data/users.json';



export default function Index() {
  return (
    <div>
      <Header />
      <Featured></Featured>
      <Trending></Trending>
      <TopCollectors />
      <How></How>
      <Auctions></Auctions>
      
      <Footer></Footer>
    </div>
  );
}
