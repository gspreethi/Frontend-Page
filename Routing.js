import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Signin from './components/Signin'
import UserPage from "./UserPage";
import UserPortal from './UserPortal';
import UserLogin from './UserLogin';
import AdminPage from './AdminPage';
import HelpPage from "./HelpPage";
import AdminLogin from './adminLogin';
import IssuesNotification from './IsuuesNotification';
import PortalPage from "./PortalPage";
import FeedbackForm from "./FeedbackForm";
import PasswordRecovery from "./PasswordRecovery";
import ForgotPassword from "./ForgotPassword";
import ForgotId from "./ForgotId";
import PasswordResetPage from './PasswordResetPage';

const [{user}] = useStateValue();
    return (
        <div>
            
      <h1 style={{color:'Green',height:'150px',textAlign:'center',backgroundColor:'grey'}}>WELCOME to SURPRISES<br/><p style={{color:'silver'}}>Online gift store</p></h1>
    
    <BrowserRouter>
    <div >
     
            <Switch>
      <Route path="/cart">
             <Header />
            <Cart />
            <Footer />
          </Route>
          <Route path="/Signin">
          <Signin />
          </Route>
          
          <Route path="/Registration">
          <Registration/>
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
     </BrowserRouter>
        </div>
    )
 




