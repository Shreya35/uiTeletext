import React,{Component} from "react";
import Sea from "./Sea"
import './App.css';
class SeaType extends Component{
  render() {
      return (
          <div className="seaCont">
             <Sea/>
             <Sea/>
             <Sea/>
             <Sea/>
          </div>
      )
  }
}
export default SeaType;
