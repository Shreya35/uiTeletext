import React,{Component} from "react";
import './App.css'
class ReviewNavigation extends Component{
  render() {
      return(
          <div className="naParen">
          <div className="navController">
              <div className="leftnavController">
                <div className="leftnavpCont">
                    <p className="pleftCont">Rated ‘Great’ with over 10784 customer reviews</p>
                </div>
                <div>
                    <span>
                        <img src="/review.svg"/>
                    </span>
                    <span>
                        <img src="/star.svg" className="navStarImg"/>
                    </span>
                </div>
              </div>
              <div className="seperatorLine">

              </div>
              <div className="rightNavController">
                  <div>
                      <p className="feefoNav">Rated ‘Great’ with over 53 Feefo reviews</p>
                  </div>
                  <div>
                      <span>
                          <img src="/feefo.svg"/>
                      </span>
                      <span>
                          <img src="/star.svg" className="navStarImg"/>
                      </span>
                  </div>
              </div>
          </div>
          </div>
      )
  }
}
export default ReviewNavigation;