import React,{Component} from "react";
import './App.css';
class Purple extends Component{
     render(){
         return(
             <div className="purpleContainer">
                  <div className="purpleContentWrapper">
                      <div className="purpleLeftWrapper">
                         <div className="purpleLeftPara1">
                            <p style={{margin:"0"}}>All inclusive holidays</p>
                            <p className="purMar">Last minute holidays</p>             
                            <p className="purMar">Family friendly holidays</p>
                            <p className="purMar">Adult only holidays</p>
                         </div>
                         <div className="purpleLeftPara2">
                            <p style={{margin:"0"}}>2020 holidays</p>
                            <p className="purMar">City break holidays</p>
                            <p className="purMar">Winter Sun holidays</p>
                            <p className="purMar">Summer holidays</p>
                         </div>
                      </div>
                <div className="purpleRightWrapper">
                  <div className="whitePurple">
                      <img className="emaWid" src="email.svg"/>
                      <span className="spanPur">Get a great deal on your next holiday</span>
                  </div>
                  <div className="whitePurple">
                      <p className="purplSubs">Subscribe for updates and promotions</p>
                  </div>
                  <div className="inputPurple">
                      <p className="inputP">Your name and email address</p>
                      <span>
                          <img className="greenPur" src="/green.svg"/>
                      </span>
                  </div>
                  <div>
                      <span className="imPurr">
                          <img src="/email.svg" className="bottomEma"/>
                      </span>
                      <span className="imPurr">
                          <img src="/email.svg" className="bottomEma"/>
                      </span>
                      <span className="imPurr">
                          <img src="/email.svg" className="bottomEma"/>
                      </span>
                      <span className="imPurr">
                          <img src="/email.svg" className="bottomEma"/>
                      </span>
                      <span className="imPurr">
                          <img src="/email.svg" className="bottomEma"/>
                      </span>
                  </div>

                </div>
                  </div>
             </div>
         )
     }
}
export default Purple;