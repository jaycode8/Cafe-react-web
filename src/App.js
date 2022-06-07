import './App2.css';
import Jayhome from './Home/home';
import Navbar from './Home/navbar';
import Aboutus from './About/about';
import MenuLists from './Menu/menu';
import Footer from './FooterComponent/footerComponent';
import FoodMenu from './Menu/menulistComponent';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Jayhome />
      <Aboutus />
      <MenuLists />
      <FoodMenu />
      <Footer />
    </div>

  );
}

export default App;
