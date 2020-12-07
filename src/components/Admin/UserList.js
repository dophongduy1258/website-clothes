
import apiCaller from './../../utils/apiCaller'
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import { Button } from 'reactstrap';
import { FaEdit, FaTrashAlt} from "react-icons/fa";


export default class UserList extends Component{
    constructor(props){
        super(props); 

        this.state = {
            token:"",
            userList : []
        }
    }

    componentDidMount(){
        apiCaller('api/user','GET',null)
            .then((res)=>{
                var getToken =localStorage.getItem("token");
                this.setState({
                    token:getToken,
                    userList : res.data //data = {_id,name,image,status,quantity,description}
                });
                console.log(this.state.userList);
            });
        // localStorage.getItem("token");
    }


    onDelete = (_id)=>{
        var {userList} = this.state;
        var {history} = this.props;
        apiCaller(`api/deleteUser/${_id}`,'DELETE',null)
            .then((res)=>{
                if(res.status === 200){ //ok
                    var index = this.findIndex(userList,_id);
                    if(index !== -1){
                        userList.slice(index,1); // find index of product in producList[] and cut 1 value
                        this.state({
                            userList:userList
                        });
                    }
                }
            });
            // history.goBack();
            console.log('delete product success');
    }

    findIndex = (userList,_id)=>{
        var result = -1;
        userList.forEach((value,index) => {
            if(value._id === _id){
                result = index;
            }
        });

        return result;
    }


    render(){
        var {userList,isLogin,token} = this.state;
        var elementUser = userList.map((value,index)=>(
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{value.name}</td>
                    <td>{value.phone}</td>
                    <td>{value.address}</td>
                    <td>{value.age}</td>
                    <td><span className={value.status === true?'badge badge-primary' : 'badge badge-dark'}>{value.gender === true?"Nam":"Nữ"}</span></td>
                    <td><img src={value.image} style={{width:'100px',height:'100px'}}/></td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <td >
                        <div className="row">
                                <div className="col-3"><Button color="warning"><Link to={`/${value._id}/editUser`}><FaEdit/></Link></Button></div>
                                <div className="col-3"></div>
                                <div className="col-3"><Button color="danger" onClick={()=>{this.onDelete(value._id)}} ><FaTrashAlt/></Button></div>
                        </div>
                    </td>
                </tr>
        ));
        if(token === null){
            return <Redirect to="/"/>
        };

        return(
            <div>
             {/* Page content */}
                <div className="container-fluid mt--6" style={{margin:'100px 0px'}}>
                <div className="row">
                    <div className="col">
                    <div className="card">
                        {/* Card header */}
                        <div className="card-header border-0">
                        <h3 className="mb-0">Light table</h3>
                        <Button><Link to="/productList">Product</Link></Button>
                        </div>
                        {/* Light table */}
                        <div className="table-responsive">
                        <table className="table align-items-center table-flush">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col" >STT</th>
                                    <th scope="col" >Họ tên</th>
                                    <th scope="col" >SĐT</th>
                                    <th scope="col" >Địa chỉ</th>
                                    <th scope="col" >Tuổi</th>
                                    <th scope="col" >Giới tính</th>
                                    <th scope="col" >Hình ảnh</th>
                                    <th scope="col" >Email</th>
                                    <th scope="col" >Password</th>
                                    <th scope="col"/>
                                </tr>
                            </thead>
                            <tbody >
                                {elementUser}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>

                </div>
            </div>


        )
    }
}


