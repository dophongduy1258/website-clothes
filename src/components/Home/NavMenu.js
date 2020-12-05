import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,Link,History, Redirect
} from "react-router-dom";


const  NavMenu = ()=>{
    return (
            <nav className="site-navigation text-right text-md-center" role="navigation">
                <div className="container">
                    <ul className="site-menu js-clone-nav d-none d-md-block">
                    <li className=" active">
                        <Link to="/">Home</Link>
                        {/* <ul className="dropdown">
                        <li><a href="#">Menu One</a></li>
                        <li><a href="#">Menu Two</a></li>
                        <li><a href="#">Menu Three</a></li>
                        <li className="has-children">
                            <a href="#">Sub Menu</a>
                            <ul className="dropdown">
                            <li><a href="#">Menu One</a></li>
                            <li><a href="#">Menu Two</a></li>
                            <li><a href="#">Menu Three</a></li>
                            </ul>
                        </li>
                        </ul> */}
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                        {/* <ul className="dropdown">
                        <li><a href="#">Menu One</a></li>
                        <li><a href="#">Menu Two</a></li>
                        <li><a href="#">Menu Three</a></li>
                        </ul> */}
                    </li>
                    <li><Link to="/product/">Shop</Link></li>
                    {/* <li><a href="#">Catalogue</a></li>
                    <li><a href="#">New Arrivals</a></li> */}
                    <li><Link to="/contact/">Contact</Link></li>
                    </ul>
                </div>
            </nav>
    )
};
  

export default NavMenu;