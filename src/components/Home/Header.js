
import React,{Component,useEffect,useState} from 'react'
import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import { BiSearch ,BiLogOut} from "react-icons/bi";
import { connect } from 'react-redux';



class Header extends Component{
    constructor(props){
        super(props);
        
        var token = localStorage.getItem("token");
        let isLogin = true;
    
        if(token == null){
            this.setState.isLogin = false
        }else{
            this.setState.isLogin = true
        }
    
    
        this.state = {
            token:"",
            isLogin:false,
            userList : []
        }
    }


    onLogout = ()=>{
        console.log('token has remove');
        localStorage.removeItem('token');
        return <Redirect to="/"/>
    }

    render(){
        var {_todoProduct} = this.props
        return (
        
            <div className="site-navbar-top">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                        <form action className="site-block-top-search">
                        <span className="icon icon-search2" />
                        <input type="text" className="form-control border-0" placeholder="Search" />
                        </form>
                    </div>
                    <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                        <div className="site-logo">
                        <a href="index.html" className="js-logo-clone">Shoppers</a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                        <div className="site-top-icons">
                        <ul>
                            {localStorage.getItem("token")? <li><Link onClick={this.onLogout}><BiLogOut /></Link></li> : <li><Link to="/login/"><span className="icon icon-person" /></Link></li>}
                            {/* <li><Link to="/login/"><span className="icon icon-person" /></Link></li> */}
                            <li><a href="#"><span className="icon icon-heart-o" /></a></li>
                            <li>
                                <Link to="/cart/" className="site-cart">
                                <span className="icon icon-shopping_cart" />
                                <span className="count">{_todoProduct.numberCart}</span>
                            </Link>
                            </li> 
                            <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu" /></a></li>
                        </ul>
                        </div> 
                    </div>
                    </div>
                </div>
            </div> 
            
    )
    }
    
}
  

const mapStateToProps = (state)=>{
    return{
        _todoProduct : state.productReducer
    }
}

export default connect(mapStateToProps,null)(Header)