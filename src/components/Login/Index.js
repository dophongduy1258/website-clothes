import apiCaller from './../../utils/apiCaller'
import React,{Component,useEffect,useState} from 'react'

import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import { Button} from 'reactstrap';

export default class Login extends Component{
    constructor(props){
        super(props);
        
        const token = localStorage.getItem("token");
        let isLogin = false;

        if(token == null){
           isLogin = false
        }


        this.state = {
            email: "",
            password: "",
            token:"",
            isLogin,
            userList : []
        }
    }

    componentDidMount(){
        apiCaller('api/user','GET',null)
            .then(res=>{
                this.setState({
                   userList:res.data
                })
            });
    }

    onChange = (event)=>{
        var target = event.target;
        var value = target.value;
        var name = target.name;
        // if(name === "gender"){
        //     value = target.value === "true"? true : false;
        // }
        this.setState({
            [name] : value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();
        var {userList,email,password,isLogin} = this.state;
        userList.forEach((value,index)=>{
            if(value.email === email && value.password === password){
                this.setState({
                    isLogin:true
                })
                // Is Admin
                if(email === "admin@gmail.com"){
                    this.setState({
                        isLogin:true
                    })

                    localStorage.setItem('token',"iwkeubf29ho2fohefh29h");
                    localStorage.setItem('id',value._id);
                    // localStorage.setItem('user',JSON.stringify());
                }
            }
        })
    }


    render(){
        return (
            <>
              <section className="h-100" style={{margin:'100px'}}>
                  <div className="container h-100">
                      <div className="row justify-content-md-center h-100">
                      <div className="card-wrapper">
                          <div className="brand">
                          <img src="img/logo.jpg" alt="logo" />
                          </div>
                          <div className="card fat">
                          <div className="card-body">
                              <h4 className="card-title">Login</h4>
                              <form method="POST" onSubmit={this.onSubmit} className="my-login-validation" noValidate>
                              <div className="form-group">
                                  <label htmlFor="email">E-Mail Address</label>
                                  <input id="email" onChange={this.onChange} type="email" className="form-control" name="email"  required autofocus />
                                  <div className="invalid-feedback">
                                  Email is invalid
                                  </div>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="password">Password
                                  {/* <a href="forgot.html" className="float-right">
                                      Forgot Password?
                                  </a> */}
                                  </label>
                                  <input id="password" onChange={this.onChange} type="password" className="form-control" name="password" required data-eye />
                                  <div className="invalid-feedback">
                                  Password is required
                                  </div>
                              </div>
                              <div className="form-group">
                                  <div className="custom-checkbox custom-control">
                                  <input type="checkbox" name="remember" id="remember" className="custom-control-input" />
                                  <label htmlFor="remember" className="custom-control-label">Remember Me</label>
                                  </div>
                              </div>
                              <div className="form-group m-0">
                                  <button type="submit" className="btn btn-primary btn-block">
                                  Login
                                  </button>
                              </div>
                              <div className="mt-4 text-center">
                                  Don't have an account? <Link to='/register/'>Create One</Link>
                              </div>
                              </form>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </section>
            </>
        );
    }
  }



