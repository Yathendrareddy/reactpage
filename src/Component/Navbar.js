import React from 'react'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
const Navbar = () => {
    return (
        <div>
            <Router>
                <ul className="container">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="">About</Link>
                    </li>
                    <li>
                        <Link to="">Contact</Link>
                    </li>
                    <li className="right">
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li className="right">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                <Route exact path="/" component={Header} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Router>
        </div>
    )
}

export default Navbar
