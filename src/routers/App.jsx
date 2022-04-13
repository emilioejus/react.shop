import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/global.css';
// import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = ()=> {

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={ <Home /> }/>
                <Route exact path='/login' element={ <Login /> } />
                <Route exact path='/recovery-password' element={ <RecoveryPassword /> } />
                <Route path='*' element={ <NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;