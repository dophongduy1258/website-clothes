
import apiCaller from './../../utils/apiCaller'
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

export default class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            price:"",
            image:"",
            status:true,
            quantity:5,
            description:"",
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

    onSubmit = (event)=>{
        event.preventDefault();
        var {name,price,image,status,quantity,description} = this.state;
        var {history} = this.props;
        apiCaller('api/addProduct','POST',{
            name:name,
            price:price,
            image:image,
            status:status,
            quantity:quantity,
            description:description,

        })
            .then((res)=>{
                console.log(res.data);
                // history.push('/')
                // redirect về trang trước đó
                history.goBack()}
            );
    }


    render(){
        return(
            <>
                
                <div className="bg-light py-3">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Add Clothe</strong></div>
                    </div>
                    </div>
                </div>  


                {/* body */}
                
                <div className="form-createClothes" style={{paddingTop:"50px",border:"15px solid black"}}>
                    <Container>
                    <p>Products</p>

                    <div style={{width:"600px",marginLeft:"200px"}}>
                        <Form onSubmit={this.onSubmit} >
                            <FormGroup>
                                <Label >Tên sản phẩm : </Label>
                                <Input type="text" onChange={this.onChange} name="name" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Giá : </Label>
                                <Input type="number" onChange={this.onChange} name="price" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Ảnh : </Label>
                                <Input type="file" onChange={this.onChange} name="image" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Tình trạng : </Label>
                                <select name="status" value={this.state.status} onChange={this.onChange}>
                                    <option value={true}>Còn hàng</option>
                                    <option value={false}>Hết hàng</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label >Số lượng : </Label>
                                <Input type="number" onChange={this.onChange} name="quantity" />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label >Chi tiết sản phẩm : </Label>
                                <Input type="text" onChange={this.onChange} name="description"  />
                            </FormGroup>

                            <Button type="submit" >Submit</Button>
                        </Form>

                    </div>
                </Container>
                </div>
            </>
        )
    }
}