import React,{Component,useEffect,useState} from 'react'
import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import { Button } from 'reactstrap';


export default function Cart(props){

  const [] = useState()




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
                                <th className="product-thumbnail">Hình ảnh</th>
                                <th className="product-name">Sản phẩm</th>
                                <th className="product-price">Giá</th>
                                <th className="product-quantity">Số lượng</th>
                                <th className="product-total">Tổng cộng</th>
                                <th className="product-remove"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="product-thumbnail">
                                        <img src="https://cavino.vn/wp-content/uploads/2018/01/bo-vest-xanh-coban-700x1000.jpg" alt="Image" style={{width:'100px',height:'100px'}} className="img-fluid" />
                                    </td>
                                    <td className="product-name">
                                        <h2 className="h5 text-black">Polo Shirt</h2>
                                    </td>
                                    <td>$49.00</td>
                                    <td>
                                        <div className="input-group mb-3" style={{maxWidth: '120px'}}>
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-primary js-btn-minus" type="button">−</button>
                                        </div>
                                        <input type="text" className="form-control text-center" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                                        </div>
                                        </div>
                                    </td>
                                    <td>$49.00</td>
                                    <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                                </tr>
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
                                <strong className="text-black">$230.00</strong>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md-6">
                                <span className="text-black">Total</span>
                                </div>
                                <div className="col-md-6 text-right">
                                <strong className="text-black">$230.00</strong>
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



