import React,{Component} from "react";
import './App.css';
class BelowHeader extends Component{
  render(){
      return (
          <div className="belowContainer">
             <div className="leftBelowContainer">
                 <div className="textStyle">
                    <p>ATOL protected</p>
                 </div>
                 <div className="textStyle">
                    <p className="lefyTex">TTA protected</p>
                 </div>
             </div>

             <div className="rightBelowContainer">
                 <span>
                   <p>Call now to book your holiday</p>
                 </span>
                 <span className="noContainer">
                  <p className="noStyle">0196 278 4136</p>
                 </span>
                 <span className="mncss">
                   <p className="opolq">Open 8am till midnight</p>
                 </span>
             </div>
          </div>
      )
  }
}
export default BelowHeader;