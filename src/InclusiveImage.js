import React,{Component} from "react";
import CardInclusive from "./CardInclusive";
import "./App.css";
class InclusiveImage extends Component{
  render(){
      return(
          <div className="incluImageContainer">
              <div className="inclusiveCard">
               <CardInclusive/>
               <CardInclusive/>
               <CardInclusive/>
                <CardInclusive/>
              </div>
          </div>
      )
  }
}
export default InclusiveImage;