import React,{Component} from "react";
import './App.css';
class MainContent extends Component{
 render() {
     return (
         <div className="mainContentController">
              <div className="MainHeading">
                   <div>
                     <img style={{width:"100px"}} src="atol-logo.svg"/>
                   </div>
                   <div className="atolCont">
                    <div className="atolHead">
                     <h1 className="atolMarr">ATOL Protected</h1>
                     </div>
                     <div className="atoText">
                     <p className="atolMarr">Book with confidence today.Low deposits from $49pp</p>
                     </div>
                   </div>
                   
                   
              </div>

              <div className="inputStyleController">
                  <div className="firstMainContent">
                    <p className="inputHeading">Destination</p>
                    <p>Any Destination</p>
                  </div> 
                  <div className="commanInputStyle"> 
                      <p className="inputHeading">Depart from</p>
                      <p>E.g. any london</p>
                  </div>
                  <div className="commanInputStyle">
                    <p className="inputHeading">Date</p>
                    <p>23/10/2019</p>
                  </div>
                  <div className="commanInputStyle">
                    <p className="coloaa">Nights</p>
                    <p>7</p>
                  </div>
                  <div className="commanInputStyle">
                    <p className="inputHeading">Guests</p>
                    <p>2 Adults,0 Children</p>
                  </div>
                  <div className="dealStyl">
                    <p>Find Deals</p>
                  </div>
              </div>

         </div>
     )
 }
}
export default MainContent;