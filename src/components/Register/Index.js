import apiCaller from './../../utils/apiCaller'
import React,{Component,useEffect,useState} from 'react'

import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import { Button} from 'reactstrap';

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            phone:"",
            address:"",
            age:0,
            gender:true,
            image: "",
            email: "",
            password: "",
        }
    }

    onChange = (event)=>{
        var target = event.target;
        var value = target.value;
        var name = target.name;
        if(name === "gender"){
            value = target.value === "true"? true : false;
        }
        this.setState({
            [name] : value
        })
    }

    onSubmit = (event)=>{
        event.preventDefault();
        var {name,phone,address,age,gender,image,email,password} = this.state;
        var {history} = this.props;
        apiCaller('api/addUser','POST',{
            name:name,
            phone:phone,
            address:address,
            age:age,
            gender:gender,
            image:image,
            email:email,
            password:password,

        })
            .then((res)=>{
                console.log(res);
                history.push('/login')
                // redirect về trang trước đó
                // history.goBack()
            }
            );
    }




    render(){
        return (
            <>
              <section className="h-100" style={{margin:'100px'}}>
                  <div className="container h-100">
                      <div className="row justify-content-md-center h-100">
                      <div className="card-wrapper">
                          <div className="brand">
                          <img src="img/logo.jpg" alt="bootstrap 4 login page" />
                          </div>
                          <div className="card fat">
                          <div className="card-body">
                              <h4 className="card-title">Register</h4>
                              <form method="POST" onSubmit={this.onSubmit} className="my-login-validation" noValidate>
                              <div className="form-group">
                                  <label htmlFor="name">Name</label>
                                  <input id="name" type="text" className="form-control" onChange={this.onChange} name="name" required autofocus />
                                  <div className="invalid-feedback">
                                  What's your name?
                                  </div>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="email">E-Mail Address</label>
                                  <input id="email" type="email" className="form-control" onChange={this.onChange} name="email" required />
                                  <div className="invalid-feedback">
                                  Your email is invalid
                                  </div>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="password">Password</label>
                                  <input id="password" type="password" className="form-control" onChange={this.onChange} name="password" required data-eye />
                                  <div className="invalid-feedback">
                                  Password is required
                                  </div>
                              </div>
                              <div className="form-group">
                                  <div className="custom-checkbox custom-control">
                                  <input type="checkbox" name="agree" id="agree" className="custom-control-input" required />
                                  <label htmlFor="agree" className="custom-control-label">I agree to the <a href="#">Terms and Conditions</a></label>
                                  <div className="invalid-feedback">
                                      You must agree with our Terms and Conditions
                                  </div>
                                  </div>
                              </div>
                              <div className="form-group m-0">
                                  <button type="submit" className="btn btn-primary btn-block">
                                  Register
                                  </button>
                              </div>
                              <div className="mt-4 text-center">
                                  Already have an account? <Link to='/login/'>login</Link>
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



