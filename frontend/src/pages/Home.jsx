import BestSeller from '../components/BestSeller';
import Header from '../components/Header';
import LatestCollection from '../components/LatestCollection';
import NewsletterBox from '../components/NewsletterBox';
import OurPolicy from '../components/OurPolicy';

const Home = () => {
  return (
    <div>
      <Header/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
