import apiCaller from './../../utils/apiCaller'
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { FaEdit, FaTrashAlt} from "react-icons/fa";


export default class EditProduct extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            name:"",
            phone:"",
            address:"",
            age:0,
            gender:true,
            image:"",
            email:"",
            password:"",
        }
    }


    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            apiCaller(`api/editUser/${id}`,"GET",null).then((res)=>{
                var data = res.data;
                this.setState({
                    id:data._id,
                    name:data.name,
                    phone:data.price,
                    address:data.address,
                    age:data.age,
                    gender:data.gender,
                    image:data.image,
                    email:data.email,
                    password:data.password,
                    
                });
                console.log(this.state);
            });
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

    onSave = (e)=>{
        e.preventDefault();
        var {history} = this.props;
        var {id,name,phone,address,age,gender,image,email,password} = this.state;
        if(id){//update
            // http://localhost:2020/api/:id method PUT
            apiCaller(`api/updateUser/${id}`,"PUT",{
                name:name,
                phone:phone,
                address:address,
                age:age,
                gender:gender,
                image:image,
                email:email,
                password:password
            })
                .then((res)=>{
                    history.goBack();
                });

            // console.log('updating');
        }else{
            apiCaller("api/addUser","POST",{
                name:name,
                phone:phone,
                address:address,
                age:age,
                gender:gender,
                image:image,
                email:email,
                password:password
            })
                .then((res)=>{
                    history.goBack();
                });
        }
    }

    render(){
        var {name,phone,address,age,gender,image,email,password} = this.state; 
        return(
            <div>
                <div className="form-createClothes" style={{paddingTop:"50px",border:"15px solid black"}}>
                    <Container>
                    <p>Update</p>

                    <div style={{width:"600px",marginLeft:"200px"}}>
                        <Form onSubmit={this.onSave} >
                            <FormGroup>
                                <Label >Họ tên : </Label>
                                <Input type="text" value={name} onChange={this.onChange}  name="name" />
                            </FormGroup>

                            <FormGroup>
                                <Label >SĐT : </Label>
                                <Input type="text" value={phone} onChange={this.onChange}  name="phone" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Địa chỉ : </Label>
                                <Input type="text" value={address} onChange={this.onChange}  name="address" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Tuổi : </Label>
                                <Input type="text" value={age} onChange={this.onChange}  name="age" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Giới tính : </Label>
                                <select name="gender" value={gender} onChange={this.onChange} >
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nữ</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label >Email : </Label>
                                <Input type="email" value={email} onChange={this.onChange} name="email" />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label >Mật khẩu : </Label>
                                <Input type="password" value={password} onChange={this.onChange} name="password"  />
                            </FormGroup>
                            {/* <ProductContext.Consumer>
                                {({setProductList})=><Button type="submit" onClick={()=> setProductList(this.state)}  >Submit</Button>}
                            </ProductContext.Consumer> */}
                            <Button type="submit" >Update</Button>

                            <Button type="submit" ><Link to='/userList/'>Go back</Link></Button>
                        </Form>


                    </div>
                </Container>
                </div>
            </div>
        )
    }
}