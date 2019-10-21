import React,{Component} from "react";
class HotelDeal extends Component{
    render(){
        return(
            <div className="hotelContainer">
                <div className="hotelWrapper">
                   <div className="hotelHeading">
                       <p className="pHote">Top Hotel Deals with Flights Included</p>
                   </div>
                   <div className="containerLogo">
                       <div className="aHotel">
                           <p>Whether looking for a relaxing getaway or a fun-filled trip, Malta ticks all the boxes. Enjoying over 300 days of sunshine and thousands of </p>
                           <p>years' worth of history, Malta is the perfect year-round destination for solo travel, couples and families. Check out some of the best deals </p>
                           <p>below and book today.</p>
                       </div>
                       <div>
                           <img src="/malta.png"/>
                       </div>
                   </div>
                   <div className="beloHotel">
                       <p>*Limited Availability: Prices are updated regularly, call us for the latest live price</p>
                   </div>
                </div>
            </div>
        )
    }
}
export default HotelDeal;