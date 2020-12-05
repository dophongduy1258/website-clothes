import React,{Component} from 'react'
import Home from './components/Home/Index'
import {
  BrowserRouter as Router,
  Switch,
  Route,Link,History, Redirect
} from "react-router-dom";
import routes from './routers';
import Header from './components/Home/Header'
import NavMenu from './components/Home/NavMenu'
import Footer from './components/Home/Footer'


export default class App extends Component{
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

  showRouters = (routes)=>{
    var result = null;
      if(routes.length > 0){
          result = routes.map((route,index)=>{
              return (
                  <Route
                      key={index}
                      path={route.path} 
                      exact={route.exact} 
                      component={route.main} 
                  />
              );
          });
      }
    return result;
  }

  onLogout = ()=>{
    console.log('token has remove');
    localStorage.removeItem('token');
    return <Redirect to="/"/>
}


  render(){
    return (
      <Router>
        <div className="App">
          {/* <Home/> */}
          <div className="site-wrap">
            
            <header className="site-navbar" role="banner">
              <Header/>
              <NavMenu/>
              
              {/* area router */}
              <Switch>
                {this.showRouters(routes)}
              </Switch>
            </header>
            
            
            
            <Footer/>
          </div>
        </div>

      </Router>
  );
  }
}

