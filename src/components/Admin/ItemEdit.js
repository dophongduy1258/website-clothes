import apiCaller from './../../utils/apiCaller'
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';


export default class EditProduct extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            name:"",
            price:"",
            image:"",
            status:false,
            quantity:0,
            description:"",
        }
    }


    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            apiCaller(`api/editProduct/${id}`,"GET",null).then((res)=>{
                var data = res.data;
                this.setState({
                    id:data._id,
                    name:data.name,
                    price:data.price,
                    image:data.image,
                    status:data.status,
                    quantity:data.quantity,
                    description:data.description,
                    
                });
                console.log(this.state);
            });
        }
        
    }

    
    onChange = (event)=>{
        var target = event.target;
        var value = target.value;
        var name = target.name;
        if(name === "status"){
            value = target.value === "true"? true : false;
        }
        this.setState({
            [name] : value
        })
    }

    onSave = (e)=>{
        e.preventDefault();
        var {history} = this.props;
        var {id,name,price,image,status,quantity,description} = this.state;
        if(id){//update
            // http://localhost:2020/api/:id method PUT
            apiCaller(`api/updateProduct/${id}`,"PUT",{
                name:name,
                price:price,
                image:image,
                status:status,
                quantity:quantity,
                description:description
            })
                .then((res)=>{
                    history.goBack();
                });

            // console.log('updating');
        }else{
            apiCaller("api/addProduct","POST",{
                name:name,
                price:price,
                image:image,
                status:status,
                quantity:quantity,
                description:description,
            })
                .then((res)=>{
                    history.goBack();
                });
        }
    }

    render(){
        var {name,price,image,status,quantity,description} = this.state; 
        return(
            <div>
                <div className="form-createClothes" style={{paddingTop:"50px",border:"15px solid black"}}>
                    <Container>
                    <p>Update</p>

                    <div style={{width:"600px",marginLeft:"200px"}}>
                        <Form onSubmit={this.onSave} >
                            <FormGroup>
                                <Label >Tên sản phẩm : </Label>
                                <Input type="text" value={name} onChange={this.onChange}  name="name" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Giá : </Label>
                                <Input type="number" value={price} onChange={this.onChange}  name="price" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Tình trạng : </Label>
                                <select name="status" value={status} onChange={this.onChange} >
                                    <option value={true}>Còn hàng</option>
                                    <option value={false}>Hết hàng</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label >Số lượng : </Label>
                                <Input type="number" value={quantity} onChange={this.onChange} name="quantity" />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label >Chi tiết sản phẩm : </Label>
                                <Input type="text" value={description} onChange={this.onChange} name="description"  />
                            </FormGroup>
                            <Button type="submit" >Update</Button>
                            
                            <Button type="submit" ><Link to='/productList/'>Go back</Link></Button>
                        </Form>

                    </div>
                </Container>
                </div>
            </div>
        )
    }
}