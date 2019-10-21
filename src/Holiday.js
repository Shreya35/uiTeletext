import React,{Component} from "react";
import './App.css'
class Holiday extends Component{
  render() {
      return(
          <div className="holidayCont">
              <div>
                  <p className="bldPara">Trustpilot</p>
                  <p className="lgtPara">*****</p>
              </div>
              <div>
                  <p className="bldPara">feefo</p>
                  <p className="lgtPara">*****</p>
              </div>
              <div>
                  <p className="bldPara">Low Deposit Holidays</p>
                  <p className="lgtPara">to all your favourite destinations</p>
              </div>
              <div>
                  <p className="bldPara">Pay monthly</p>
                  <p className="lgtPara">Instalments</p>
              </div>
              <div>
                  <p className="bldPara">24/7 in-resort</p>
                  <p className="lgtPara">support</p>
              </div>
          </div>
      )
  }
}
export default Holiday;