import React from 'react'


const  Card = ()=>{
    return (
      <div className="site-section site-blocks-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay>
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="" className="img-fluid" />
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Women</h3>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={100}>
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src="https://c1.wallpaperflare.com/preview/334/875/695/child-fashion-girl-portrait.jpg" alt="" className="img-fluid" />
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Children</h3>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={200}>
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src="https://www.bestoftoronto.net/wp-content/uploads/2014/08/HD-Homme-Toronto-Mens-Fashion-Week-TOM-BestofToronto-2014-005.jpg" alt="" className="img-fluid" />
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Men</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    )
};
  

export default Card;