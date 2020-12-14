// import React,{Component} from 'react'

// class Paginations extends Component{
//     render(){
//     var {postsPerPage,totalPosts,paginate} = this.props
//     const pageNumbers = [];

//     console.log(`postPerpage ${postsPerPage}`);
//     console.log(`totalPosts ${totalPosts}`);
//     console.log(`paginate ${paginate}`);

//     for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage);i++){
//          pageNumbers.push(i);
//     }
//     return(
//         <div className="row" data-aos="fade-up">
//             <div className="col-md-12 text-center" >
//                 <div className="site-block-27">
//                     <ul>
                        
//                         <li><a href="#">&lt;</a></li>
//                         {
//                             pageNumbers.map(number=>{
//                                 return(
//                                     <li>
//                                         <a href="!#" onClick={()=>paginate(number)}>
//                                             {number}
//                                         </a>
//                                     </li>
//                                 )
//                             })
//                         }
//                         <li><a href="#">&gt;</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
//     }
// }

// export default Paginations;
// <Paginations totalPosts={filterByKeyword.length} postPerPage={postPerPage} paginate={this.paginate}/>
















