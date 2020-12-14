import React,{Component,useEffect,useState} from 'react'
import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../../actions/ProductActions'

function Cart ({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){

    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }



        return (
        <>
            <div className="bg-light py-3">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Cart</strong></div>
                        </div>
                        </div>
                    </div>
                    <div className="site-section">
                        <div className="container">
                        <div className="row mb-5">
                            <form className="col-md-12" method="post">
                            <div className="site-blocks-table">
                                <table className="table table-bordered">
                                <thead>
                                    <tr>
                                    <th className="product-thumbnail">Tên sản phẩm</th>
                                    <th className="product-thumbnail">Hình ảnh</th>
                                    <th className="product-price">Giá</th>
                                    <th className="product-quantity">Số lượng</th>
                                    <th className="product-total">Tổng cộng</th>
                                    <th className="product-remove"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.Carts.map((item,idx)=>{
                                        return(
                                        <tr key={idx}>
                                            <td className="product-name">
                                                <h2 className="h5 text-black">{item.name}</h2>
                                            </td>
                                            <td className="product-thumbnail">
                                                <img src={item.image} alt="Image" style={{width:'100px',height:'100px'}} className="img-fluid" />
                                            </td>
                                            <td>{ TotalPrice(item.price,item.quantity)}</td>
                                                {/* {item.price} */}    
                                            <td>
                                                <div className="input-group mb-3" style={{maxWidth: '120px'}}>
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={()=>DecreaseQuantity(idx)}>−</button>
                                                </div>
                                                {/* <input type="text" className="form-control text-center" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" /> */}
                                                <span className='btn btn-light'>{item.quantity}</span>
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={()=>IncreaseQuantity(idx)}>+</button>
                                                </div>
                                                </div>
                                            </td>
                                            <td>$49.00</td>
                                            <td>
                                                {/* <a  className="btn btn-danger btn-sm" style={{color:'#fff'}} onClick={()=>DeleteCart(idx)} >X</a> */}
                                                <Button color="danger" onClick={()=>DeleteCart(idx)}>X</Button>
                                            </td>
                                        </tr>
                                        )
                                    })}
                                </tbody>
                                </table>
                            </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="row mb-5">
                                <div className="col-md-6 mb-3 mb-md-0">
                                <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
                                </div>
                                <div className="col-md-6">
                                <Button className="btn btn-outline-primary btn-sm btn-block"><Link to="/product/">Continue Shopping</Link></Button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <label className="text-black h4" htmlFor="coupon">Coupon</label>
                                <p>Enter your coupon code if you have one.</p>
                                </div>
                                <div className="col-md-8 mb-3 mb-md-0">
                                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                                </div>
                                <div className="col-md-4">
                                <button className="btn btn-primary btn-sm">Apply Coupon</button>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6 pl-5">
                            <div className="row justify-content-end">
                                <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-12 text-right border-bottom mb-5">
                                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                    <span className="text-black">Subtotal</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                    <strong className="text-black">{Number(TotalCart).toLocaleString('en-US')}</strong>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                    <span className="text-black">Total</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                    <strong className="text-black">{Number(TotalCart).toLocaleString('en-US')}</strong>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <button className="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
        </>
        );
    
}



const mapStateToProps = (state)=>{
    return{
        items : state.productReducer
    }
}

export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart)