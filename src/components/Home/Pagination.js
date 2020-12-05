import apiCaller from './../../utils/apiCaller'
import React,{useEffect,useState} from 'react'


const  Pagination = (props)=>{

  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true);
    apiCaller('api/Product','GET',null)
        .then((res)=>{
          setProducts(res.data);
          setLoading(false);
        });
        console.log(products)
  },[]);



  if(loading){
      return <p>Loading products....</p>
  }


  
    return (
      <div className="site-section block-3 site-blocks-2 bg-light">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-7 site-section-heading text-center pt-4">
        <h2>Featured Products</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="nonloop-block-3 owl-carousel">
          <div className="item">
            <div className="block-4 text-center">
              <figure className="block-4-image">
                <img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid" />
              </figure>
              <div className="block-4-text p-4">
                <h3><a href="#">Tank Top</a></h3>
                <p className="mb-0">Finding perfect t-shirt</p>
                <p className="text-primary font-weight-bold">$50</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="block-4 text-center">
              <figure className="block-4-image">
                <img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid" />
              </figure>
              <div className="block-4-text p-4">
                <h3><a href="#">Corater</a></h3>
                <p className="mb-0">Finding perfect products</p>
                <p className="text-primary font-weight-bold">$50</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="block-4 text-center">
              <figure className="block-4-image">
                <img src="images/cloth_2.jpg" alt="Image placeholder" className="img-fluid" />
              </figure>
              <div className="block-4-text p-4">
                <h3><a href="#">Polo Shirt</a></h3>
                <p className="mb-0">Finding perfect products</p>
                <p className="text-primary font-weight-bold">$50</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="block-4 text-center">
              <figure className="block-4-image">
                <img src="images/cloth_3.jpg" alt="Image placeholder" className="img-fluid" />
              </figure>
              <div className="block-4-text p-4">
                <h3><a href="#">T-Shirt Mockup</a></h3>
                <p className="mb-0">Finding perfect products</p>
                <p className="text-primary font-weight-bold">$50</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="block-4 text-center">
              <figure className="block-4-image">
                <img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid" />
              </figure>
              <div className="block-4-text p-4">
                <h3><a href="#">Corater</a></h3>
                <p className="mb-0">Finding perfect products</p>
                <p className="text-primary font-weight-bold">$50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
};
  {/* { products.map((product,idx)=>{
                        <ItemProduct key={idx} {...product}/>
                      })
                    } */}
// var ItemProduct = (props)=>{
//   const {_id,name,price,image,status,quantity,description} = props;
//   return(
//     <div className="item">
//       <div className="block-4 text-center">
//         <figure className="block-4-image">
//           <img src={image} alt="Image placeholder" style={{width:'50px',height:'50px'}} className="img-fluid" />
//         </figure>
//         <div className="block-4-text p-4">
//           <h3><a href="#">{name}</a></h3>
//           <p className="mb-0">{description}</p>
//           <p className="text-primary font-weight-bold">{price} đ</p>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Pagination;