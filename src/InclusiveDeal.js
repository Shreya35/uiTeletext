import React,{Component} from "react";
import './App.css';
class InclusiveDeal extends Component{
  render(){
      return (
          <div className="inclusiveContainer">
              <div className="inclusiveHeading">
                  <p>All Inclusive Deals</p>
              </div>
              <div className="inclusiveWrap">
                  <div className="inclusPara">
                      <p className="inclusMargin">Take the hassle out of booking your dream holiday with one of our cheap exclusive all inclusive deals. Whether you’re treating the </p>
                      <p className="inclusMargin">entire family to a unforgettable summer holiday or escaping on a romantic retreat, our all inclusive deals are the perfect way to make </p>
                      <p className="inclusMargin">booking as stress-free as your holiday.</p>
                  </div>
                  <div className="insSee">
                      <p>See all</p>
                  </div>
              </div>
              <div className="bottomInclu">
                  <p>*Limited Availability: Prices are updated regularly, call us for the latest live price</p>
              </div>
          </div>
      )
  }
}
export default InclusiveDeal;