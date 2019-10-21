import React,{Component} from "react";
import './App.css';
class PurpleNav extends Component{
  render(){
      return (
          <div className="purpleNavContainer">
              <div className="purpleNavWrapper">
                  <div className="textNavPurpl">
                      <span>Popular Destinations</span>
                  </div>
                  <div className="textNavPurpl">
                      <span>Popular Cities</span>
                  </div>
                  <div className="textNavPurpl">
                      <span>Popular Resorts</span>
                  </div>
                  <div className="textNavPurpl">
                      <span>Popular Holidays</span>
                  </div>
                  <div className="textNavPurpl">
                      <span>Seasonal Holidays</span>
                  </div>
              </div>   
          </div>
      )
  }
}
export default PurpleNav;