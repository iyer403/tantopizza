import Delivery from './components/Delivery';
import Featured from './components/Featured';
import TopNav from './components/TopNav';
import TopPicks from './components/TopPicks';
import NewsLetter from './components/NewsLetter';
import Meal from './components/Meal';
import Categories from './components/Categories';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <NewsLetter />
      <Footer/>
    </div>
  );
}
