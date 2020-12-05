import React,{Component} from 'react'


export default function About(){
    return (
      <>
        <div className="bg-light py-3">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">About</strong></div>
                </div>
                </div>
            </div>  
            <div className="site-section border-bottom" >
                <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                    <div className="block-16">
                        <figure>
                        <img src="https://d3avoj45mekucs.cloudfront.net/rojakdaily/media/2nicholas/malaysia/8886.jpg?ext=.jpg" alt="Image placeholder" className="img-fluid rounded" />
                        <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="ion-md-play" /></a>
                        </figure>
                    </div>
                    </div>
                    <div className="col-md-1" />
                    <div className="col-md-5">
                    <div className="site-section-heading pt-3 mb-4">
                        <h2 className="text-black">How We Started</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
                    <p>Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam cumque recusandae, laudantium minima repellendus.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="site-section border-bottom" >
                <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 site-section-heading text-center pt-4">
                    <h2>The Team</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                    <div className="block-38 text-center">
                        <div className="block-38-img">
                        <div className="block-38-header">
                            <img src="data:image/jpeg;base64,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" alt="Image placeholder" className="mb-4" />
                            <h3 className="block-38-heading h4">Elizabeth Graham</h3>
                            <p className="block-38-subheading">CEO/Co-Founder</p>
                        </div>
                        <div className="block-38-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                    <div className="block-38 text-center">
                        <div className="block-38-img">
                        <div className="block-38-header">
                            <img src="https://i.pinimg.com/474x/fc/90/9f/fc909f4bf3a61b87bb11d60f01c0f1f4.jpg" alt="Image placeholder" className="mb-4" />
                            <h3 className="block-38-heading h4">Jennifer Greive</h3>
                            <p className="block-38-subheading">Co-Founder</p>
                        </div>
                        <div className="block-38-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                    <div className="block-38 text-center">
                        <div className="block-38-img">
                        <div className="block-38-header">
                            <img src="https://pbs.twimg.com/profile_images/1082177404716515328/eS_az-Uo_400x400.jpg" alt="Image placeholder" className="mb-4" />
                            <h3 className="block-38-heading h4">Patrick Marx</h3>
                            <p className="block-38-subheading">Marketing</p>
                        </div>
                        <div className="block-38-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                    <div className="block-38 text-center">
                        <div className="block-38-img">
                        <div className="block-38-header">
                            <img src="https://i.pinimg.com/474x/ac/63/7e/ac637eaefbcad00be6db03101d325c39.jpg" alt="Image placeholder" className="mb-4" />
                            <h3 className="block-38-heading h4">Mike Coolbert</h3>
                            <p className="block-38-subheading">Sales Manager</p>
                        </div>
                        <div className="block-38-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="site-section site-section-sm site-blocks-1 border-0" data-aos="fade">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay>
                    <div className="icon mr-4 align-self-start">
                        <span className="icon-truck" />
                    </div>
                    <div className="text">
                        <h2 className="text-uppercase">Free Shipping</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={100}>
                    <div className="icon mr-4 align-self-start">
                        <span className="icon-refresh2" />
                    </div>
                    <div className="text">
                        <h2 className="text-uppercase">Free Returns</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={200}>
                    <div className="icon mr-4 align-self-start">
                        <span className="icon-help" />
                    </div>
                    <div className="text">
                        <h2 className="text-uppercase">Customer Support</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
      </>
  );
  }

