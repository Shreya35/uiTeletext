import React,{Component} from "react";
import Button from '@material-ui/core/Button';
class Sea extends Component{
  render(){
      return(
        <div className="seaTypes">
        <div className="seaHead">
            <p>Arena Beach</p>
        </div>
        <div className="seaIMgCont">
          <div className="seaImg">
          </div>
          <div className="insideImgText">
             <p className="marSe">Fuerteventura</p>
          </div>
        </div>
        
        <div className="teSea">
            <p className="textSea">Fuerteventura,Fuerteventura</p>
            <p className="noSea">00000 <span className="spanSea">(1267 reviews)</span></p>
        </div>
        <hr/>
        <div className="inclusiveSea">
            <p>All Inclusive</p>
        </div>
        <hr/>
        <div className="seaBottomWrapper">
           <div className="starSea">
               <p className="pSta">*****</p>
               <p className="fromSea">from <span className="moneyStar">$254pp</span></p>
           </div>
           <div className="seaBtnWrapper">
             <Button variant="contained" color="primary" style={{backgroundColor:"#e87340"}}>
               View Deal
              </Button>
           </div>
        </div>
    </div>
      )
  }
}
export default Sea;