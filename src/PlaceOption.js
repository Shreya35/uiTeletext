import React,{Component} from "react";
import Place from "./Place";
import './App.css';
class PlaceOption extends Component{
  render(){
      return (
          <div className="placeContainer">
             <Place/>
             <Place/>
             <Place/>
          </div>
      )
  }
}
export default PlaceOption;