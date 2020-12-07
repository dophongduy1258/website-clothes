import apiCaller from './../../utils/apiCaller'
import React, { useState,useEffect } from "react";
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import { FaCartPlus ,FaUser,FaTruck,FaRedoAlt,FaQuestionCircle,FaEnvelope,FaPhoneAlt} from 'react-icons/fa';
import { FiChevronDown,FiHeart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { IoMdPin } from "react-icons/io";


export default function InfoItem(props){

    const [productList,setProductList] = useState([]);
    const [loading,setLoading] = useState(false);
    const [quantityItem,setQuantityItem] = useState(1);

     
    var {match,name} = props;
    useEffect(()=>{
        setLoading(true);
        if(match){
            var id = match.params.id;
            apiCaller(`api/editProduct/${id}`,'GET',null)
                .then((res)=>{
                    setProductList(res.data);
                    setLoading(false);
                });
            
        }
    },[]);



    if(loading){
        return <p>Loading products....</p>
    }

    // console.log(quantityItem);

        return(
            <>

                <div className="site-wrap">
                      

                {/* info product */}
                    
                    <InfoProduct onSetQuantityItem={setQuantityItem} defautQuantity={1} quantityItem={quantityItem} {...productList}/>

                {/* end info product */}


                
                <footer className="site-footer border-top">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="row">
                            <div className="col-md-12">
                            <h3 className="footer-heading mb-4">Navigations</h3>
                            </div>
                            <div className="col-md-6 col-lg-4">
                            <ul className="list-unstyled">
                                <li><a href="#">Sell online</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Shopping cart</a></li>
                                <li><a href="#">Store builder</a></li>
                            </ul>
                            </div>
                            <div className="col-md-6 col-lg-4">
                            <ul className="list-unstyled">
                                <li><a href="#">Mobile commerce</a></li>
                                <li><a href="#">Dropshipping</a></li>
                                <li><a href="#">Website development</a></li>
                            </ul>
                            </div>
                            <div className="col-md-6 col-lg-4">
                            <ul className="list-unstyled">
                                <li><a href="#">Point of sale</a></li>
                                <li><a href="#">Hardware</a></li>
                                <li><a href="#">Software</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <h3 className="footer-heading mb-4">SHOPPERS</h3>
                        <a href="#" className="block-6">
                            <img src="https://i.pinimg.com/originals/aa/ba/b6/aabab62b5bd65b0920d0b98231872fa7.jpg" alt="Image placeholder" className="img-fluid rounded mb-4" />
                            <h3 className="font-weight-light  mb-0">Finding Your Perfect Shoes</h3>
                            <p>Promo from  nuary 15 — 25, 2019</p>
                        </a>
                        </div>
                        <div className="col-md-6 col-lg-3">
                        <div className="block-5 mb-5">
                            <h3 className="footer-heading mb-4">Contact Info</h3>
                            <ul className="list-unstyled">
                            <li ><IoMdPin/>203 Fake St. Mountain View, San Francisco, California, USA</li>
                            <li ><FaPhoneAlt style={{marginRight:"90px"}}/><a href="tel://23923929210">+2 392 3929 210</a></li>
                            <li ><FaEnvelope style={{marginRight:"10px"}}/>emailaddress@domain.com</li>
                            </ul>
                        </div>
                        <div className="block-7">
                            <form action="#" method="post">
                            <label htmlFor="email_subscribe" className="footer-heading">Subscribe</label>
                            <div className="form-group">
                                <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email" />
                                <input type="submit" className="btn btn-sm btn-primary" defaultValue="Send" />
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                        <p>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                        </div>
                    </div>
                    </div>
                </footer>
                </div>
            </>

        )
}


const InfoProduct = (props)=>{
    const {_id,name,price,image,status,description,quantityItem,defautQuantity} = props;


    function onChangeQuantity(quantity){
        // 1 <= quantity >= 100

        const updateQuantity = quantityItem + quantity;
        if( 1 <= updateQuantity <= 100){
            props.onSetQuantityItem(updateQuantity)
        }else{
            
            props.onSetQuantityItem(quantityItem)
        }
    }

    return(
            <>
            <div className="bg-light py-3">
                            <div className="container">
                            <div className="row">
                            <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">{name}</strong></div>
                            </div>
                            </div>
                        </div>
            <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={image} alt="Image" className="img-fluid" />
                    </div>

                    <div className="col-md-6">
                        <h2 className="text-black">{name}</h2>
                        <p>{description}</p>
                        <p className="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
                        <p><strong className="text-primary h4">{price} đ</strong></p>
                        
                        <div className="mb-1 d-flex">
                            <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                            <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input type="radio" id="option-sm" name="shop-sizes" /></span> <span className="d-inline-block text-black">Small</span>
                            </label>
                            <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                            <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input type="radio" id="option-md" name="shop-sizes" /></span> <span className="d-inline-block text-black">Medium</span>
                            </label>
                            <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                            <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input type="radio" id="option-lg" name="shop-sizes" /></span> <span className="d-inline-block text-black">Large</span>
                            </label>
                            <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                            <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input type="radio" id="option-xl" name="shop-sizes" /></span> <span className="d-inline-block text-black"> Extra Large</span>
                            </label>
                        </div>
                    {/*defaultValue={quantityItem}*/}
                        <div className="mb-5">
                            <div className="input-group mb-3" style={{maxWidth: '120px'}}>
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={()=>{onChangeQuantity(-1)}}>−</button>
                                </div>

                                <label type="text" className="form-control text-center"    placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" >{quantityItem}</label>
                                
                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={()=>{onChangeQuantity(+1)}} >+</button>
                                </div>
                            </div>
                        </div>

                        <p><a href="cart.html" className="buy-now btn btn-sm btn-primary">Add To Cart</a></p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )


}