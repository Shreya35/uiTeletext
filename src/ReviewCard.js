import React,{Component} from "react";

class ReviewCard extends Component{
  render(){
      return (
       
        <div className="reviewRightWrap">
        <div className="reviewCard">
             <div className="reviewHead">
                <div>
                    <img src="/review.svg"/>
                </div>
                <div>
                    <img className="starReviewImg" src="/star.svg"/>
                </div>
             </div>
             <div className="reviewPara">
                 <p className="reviewMargin">Really good prices,checked</p>
                 <p className="reviewMargin">on different board basis for us</p>
                 <p className="reviewMargin">to give us a comparison.Very</p>
                 <p className="reviewMargin">helpful.</p>
             </div>
             <div className="bottomReviewCont">
                   <div>
                       <img className="userRev" src="/user.svg"/>
                   </div>
                   <div className="teMa">
                       <p className="p1Review">Mr Gareth</p>
                       <p className="p2Review">Published 1 Days ago</p>
                   </div>
             </div>
        </div>
    </div>
      )
  }
}
export default ReviewCard;