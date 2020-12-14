import React, { Component } from 'react'
import { connect } from 'react-redux';
import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import { Button, Pagination} from 'reactstrap';
import {addToCart} from '../../actions/CartActions'

class Item extends Component{

    render(){
        var {product,addToCart} = this.props;
        return(
            <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                <div className="block-4 text-center border">
                    <figure className="block-4-image">
                    <Link to={`/${product._id}/infoProduct`}><img src={product.image} alt="Image placeholder" className="img-fluid" /></Link>
                    </figure>
                    <div className="block-4-text p-4">
                        <h3><Link to={`/${product._id}/infoProduct`}>{product.name}</Link></h3>
                        <p className="mb-0">{product.description}</p>
                        <p className="text-primary font-weight-bold">{product.price}</p>
                    </div>
                    <Button color="primary" className="btn  btn-sm btn-block" onClick={()=>this.onAddToCArt(product)} >Add To Cart</Button>
                </div>
            </div>
        )
    }

    onAddToCArt = (item)=>{
        addToCart(item)
    }


}



// export default Item;

const mapDispatchToProps = (dispatch,props)=>{
    return{
        onAddToCart :(item)=>{
            dispatch(addToCart(item,1))
        }
    }
}

  export default connect(null,mapDispatchToProps)(Item)
// onClick={()=>onAddToCart(product)}