import React,{Component} from "react";
import Button from '@material-ui/core/Button';
import ReviewNavigation from "./ReviewNavigation"
import ReviewCard from "./ReviewCard";
import './App.css';
class Review extends Component{
   render(){
       return (
           <div className="parentRev">
           <div className="reviewContainer">
               <div className="reviewWrapper">
                  <div className="reviewLeftWrapper">
                     <div className="headRev">
                         <p>Customer reviews</p>
                     </div>
                     <div className="paraReview">
                         <p>Service is at the forefront of our </p>
                         <p>business and our team is ready to </p>
                         <p>answer questions, assist in </p>
                         <p>bespoke requests, and make your </p>
                         <p>booking process as simple as </p>
                         <p>possible.</p>
                     </div>
                     <div className="bottomParaReview">
                        <p>But don’t take our word for it…</p>
                     </div>
                     <div className="btnReviewWrapper">
                       <Button variant="contained" color="primary" style={{backgroundColor:"#8ab44a",padding:"7px 20px"}}>
                          MORE REVIEWS
                        </Button>
                     </div>
                  </div>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
               </div>
           
       
              
           </div>
           <ReviewNavigation/>
           </div>
       )
   }
   
}
export default Review;