import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/global.css';
// import Layout from '../containers/Layout';
import Checkout from '../pages/Checkout';
import CreateAccount from '../pages/CreateAccount';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import NewPassword from '../pages/NewPassword';
import NotFound from '../pages/NotFound';
import Order from '../pages/Order';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';

const App = ()=> {

    return (
        <Router>
            <Routes>
                <Route exact path='/checkout' element={ <Checkout /> }/>
                <Route exact path='/create-account' element={ <CreateAccount /> }/>
                <Route exact path='/' element={ <Home /> }/>
                <Route exact path='/login' element={ <Login /> }/>
                <Route exact path='/my-account' element={ <MyAccount /> }/>
                <Route exact path='/new-password' element={ <NewPassword /> }/>
                <Route exact path='/order' element={ <Order /> }/>
                <Route exact path='/' element={ <Home /> }/>
                <Route exact path='/password-recovery' element={ <PasswordRecovery /> } />
                <Route exact path='/send-email' element={ <SendEmail/> } />
                <Route path='*' element={ <NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;