import React,{Component} from "react";
class CallNow extends Component{
   render() {
       return(
           <div className="callNowContainer">
              <div className="wrapperCallNow">
                    <div className="callHeading">
                        <p className="callPara">Call now to book <span className="calNo">0238 016 6157</span></p>
                    </div>
                    <hr className="callHorizontal"/>
                    <div className="iconCallNowWrapper">
                        <div className="iconLayout">
                            <img src="/low-deposit.svg"/>
                                 <span className="distanceCall">
                                  <p className="callPara1">Low Deposit Holidays</p>
                                  <p className="callPara2">to all your favourite destinations</p>
                                 </span>
                                 
                        </div>
                        <div className="iconLayout">
                            <img src="/calendar-icon.svg"/>
                            <span className="distanceCall">
                                <p className="callPara1">Pay monthly</p>
                                <p className="callPara2">Instalments</p>
                            </span>
                        </div>
                        <div className="iconLayout">
                            <img src="/clock.svg"/>
                            <span className="distanceCall">
                                <p className="callPara1">24/7 in-resort</p>
                                <p className="callPara2">support</p>
                            </span>
                        </div>
                    </div>

              </div>
              <hr/>
           </div>
       )
   }
}
export default CallNow;