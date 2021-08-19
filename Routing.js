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
      <nav className="d-flex">
      <ul className="nav bg-light justify-content-center" style={{marginLeft:'200px'}}>
        <nav className="nav-item" style={{color:'brown'}}>
        Register: <Link className="nav-link" to="/Registeration">Registration</Link>
        </nav>
        <nav className="nav-item "  style={{color:'brown'}}>
         Already a user :  <Link className="nav-link" to="/UserLogin" >UserLogin</Link>
        </nav>
        <nav className="nav-item "  style={{color:'brown'}}>
         <Link className="nav-link" to="/AdminLogin" >AdminLogin</Link>
        </nav>

        <nav className="nav-item "  style={{color:'brown'}}>
         <Link className="nav-link" to="/PortalPage" >Portal To Contact</Link>
        </nav>
        
        
       
      </ul>
      </nav>
      <IssuesNotification />

      
     
      <Switch>
        <Route path="/Register" component={Register}>
            <Register  />
        </Route>
        <Route path="/UserPortal" component={UserPortal}>
         
        </Route>
        <Route path="/UserLogin" component={UserLogin}>
          <UserLogin />
        </Route>
        <Route path="/AdminPage" component={AdminPage}>
         
        </Route>
        <Route path="/AdminLogin" component={AdminLogin}>
        <AdminLogin />
        </Route>

        <Route path="/PortalPage" component={PortalPage}>
        <PortalPage />
        </Route>

        <Route path="/UserPage" component={UserPage}></Route>

        <Route path="/HelpPage" component={HelpPage}></Route>
        <Route path="/FeedbackForm" component={FeedbackForm}></Route>
        <Route path="/SecurityQuestionForm" component={SecurityQuestionForm}></Route>
        <Route path="/ForgotId" component={ForgotId}></Route>
        <Route path="/ForgotPassword" component={ForgotPassword}></Route>
        <Route path="/PasswordResetPage/:userId" component={PasswordResetPage}></Route>

        

      </Switch>
      </div>
    </BrowserRouter>
        </div>
    )
 




