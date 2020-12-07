import React,{Component,useEffect,useState} from 'react'
import apiCaller from './../../utils/apiCaller'

import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import { Button } from 'reactstrap';
// import '../css/productList/productList.css';
import { FaEdit, FaTrashAlt} from "react-icons/fa";

// export default function ItemList(props){

//   const [products,setProducts] = useState([])
//   const [loading,setLoading] = useState(false);

//   useEffect(()=>{
//     setLoading(true);
//     apiCaller('api/Product','GET',null)
//         .then((res)=>{
//           setProducts(res.data);
//           setLoading(false);
//         });
//         console.log(products);
//   },[]);



//   if(loading){
//       return <p>Loading products....</p>
//   }

//   var ItemProduct = products.map((item,idx)=>{
//     <tr key={idx}>
//         <th scope="row">{idx}</th>
//         <td>{item.name}</td>
//         <td><img src={item.image} style={{width:'100px',height:'100px'}}/></td>
//         <td>{item.price}</td>
//         <td><span className={item.status === true?'badge badge-primary' : 'badge badge-dark'}>{item.status === true?"Còn hàng":"Hết hàng"}</span></td>
//         <td>{item.quantity}</td>
//         <td>{item.description}</td>
//         <td >
//             <div className="row">
//                     <div className="col-3"><Button color="warning"><Link to={`/${item._id}/editProduct`}><FaEdit/></Link></Button></div>
//                     <div className="col-3"></div>
//                     <div className="col-3"><Button color="danger" onClick={()=>this.onDelete(item._id)}><FaTrashAlt/></Button></div>
//             </div>
//         </td>
//     </tr>
//   })

export default class ItemList extends Component{
    constructor(props){
        super(props);
        this.state = {
            token:"",
            productList : []
        }
    }

    componentDidMount(){
        apiCaller('api/Product','GET',null)
            .then((res)=>{
                var getToken =localStorage.getItem("token");
                this.setState({
                    token:getToken,
                    productList : res.data //data = {_id,name,image,status,quantity,description}
                });
                console.log(this.state.productList);
            });
    }

    onDelete = (_id)=>{
        var {productList} = this.state;
        var {history} = this.props;
        apiCaller(`api/deleteProduct/${_id}`,'DELETE',null)
            .then((res)=>{
                if(res.status === 200){ //ok
                    var index = this.findIndex(productList,_id);
                    if(index !== -1){
                        productList.slice(index,1); // find index of product in producList[] and cut 1 value
                        this.state({
                            productList:productList
                        });
                    }
                }
            });
            // history.goBack();
            console.log('delete product success');
    }

    findIndex = (productList,_id)=>{
        var result = -1;
        productList.forEach((value,index) => {
            if(value._id === _id){
                result = index;
            }
        });

        return result;
    }



    render(){

        var {productList,token} = this.state;
        var ItemProduct = productList.map((value,index)=>(
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{value.name}</td>
                    <td><img src={value.image} style={{width:'100px',height:'100px'}}/></td>
                    <td>{value.price}</td>
                    <td><span className={value.status === true?'badge badge-primary' : 'badge badge-dark'}>{value.status === true?"Còn hàng":"Hết hàng"}</span></td>
                    <td>{value.quantity}</td>
                    <td>{value.description}</td>
                    <td >
                        <div className="row">
                                <div className="col-3"><Button color="warning"><Link to={`/${value._id}/editProduct`}><FaEdit/></Link></Button></div>
                                <div className="col-3"></div>
                                <div className="col-3"><Button color="danger" onClick={()=>this.onDelete(value._id)}><FaTrashAlt/></Button></div>
                        </div>
                    </td>
                </tr>
        ));
        
        if(token === null){
            return <Redirect to="/"/>
        };


        return (
            <>
                <div className="container-fluid mt--6" style={{margin:'100px 0px'}}>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                {/* Card header */}
                                <div className="card-header border-0">
                                    <h3 className="mb-0">Light table</h3>
                                    <Button><Link to="/userList">User</Link></Button>
                                </div>
                                {/* Light table */}
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col" >STT</th>
                                                <th scope="col" >Tên sản phẩm</th>
                                                <th scope="col" >Hình ảnh</th>
                                                <th scope="col" >Giá</th>
                                                <th scope="col" >Tình trạng</th>
                                                <th scope="col" >Số lượng</th>
                                                <th scope="col" >Mô tả</th>
                                                <th scope="col"/>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {ItemProduct}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}


