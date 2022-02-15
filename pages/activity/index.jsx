import Header from '../../src/components/header/Header';
import Hero from '../../src/components/hero/Hero';
import ActivityFilters from '../../src/components/activity/ActivityFilters';
import ActivityList from '../../src/components/activity/ActivityList';
import Footer from '../../src/components/footer/Footer';
import dataActivity from '../../data/activity.json';

export default function Activity() {
    return (
        <div>
            <Header></Header>
            <Hero text='Activity'/>
            <ActivityFilters></ActivityFilters>
            <ActivityList></ActivityList>
            <Footer></Footer>
        </div>
    )
}
