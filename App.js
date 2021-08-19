import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carousel from "./Carousel";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewReleases from "./NewReleases";
import WeddingGift from './WeddingGift'
import MostPopularBooks from './MostPopularBooks'
import Cart from './Cart';
import Checkout from './Checkout'
import SearchResult from './SearchResult'
import LoginPage from './LoginPage'
import AdminHome from './AdminHome'
import ThankyouImage from './images/ThankyouImage.jpg'
import {useStateValue} from './StateProvider';
import { useEffect } from "react";
import AddAgift from "./AddAgift";
import Deletegift from "./Deletegift";
import Signup from "./Signup";


function App() {
  const [{user}] = useStateValue();
  useEffect(()=>{}, [user]);
  return (
    
    <Router>
      <div className="app">
      
      
      
        <Switch>
          <Route path="/cart">
          
            <Header />
            <Cart />
            <Footer />
          </Route>
          <Route path="/loginPage">
          <LoginPage />
          </Route>
          
          <Route path="/Signup">
          <Signup/>
          </Route>
          
          <Route path="/newreleases">
            <Header />
            <NewReleases/>
            <Footer />
          </Route>
          <Route path="/mostPopularBooks">
            <Header />
            <MostPopularBooks />
            <Footer />
          </Route>
          <Route path="/WeddingGift">
            <Header />
            <WeddingGift />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/Thankyou">
            <Header />
            <center><img src={ThankyouImage} alt="thankyouMessaage"/></center>
          </Route>
          <Route path='/bookAddedSuccessfully'>
            <h1>Gift Added successfully</h1>
          </Route>
          <Route path="/deleteABook">
          <Header />
            <Deletegift />
            <Footer />
          </Route>
          <Route path="/SearchResult/:name">
            <Header />
            <SearchResult />
            <Footer />
          </Route>
          <Route path='/addABook'>
            <Header />
            <AddAgift/>
            <Footer />
          </Route>
          <Route exact path="/">
            <Header />
            {(user===null)?(<div />): ((user.isAdmin===false)?(<AdminHome />):(<div />))}
            <AdminHome />
            <Carousel/>
            <Home />
            <Footer />
          </Route>
          
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
