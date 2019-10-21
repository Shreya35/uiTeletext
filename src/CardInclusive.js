import React,{Component} from "react";
import Button from '@material-ui/core/Button';

class CardInclusive extends Component{
 render(){
     return (
        <div className="cardDataInclusive">
        <div className="carImgInclusive">
            
        </div>
        <div className="texWrappInclusive">
          <div className="texxInclusive">
           <p className="maIncl">Canaries</p>
           <p className="pMainIncl">7 nights, All Inclusive</p>
          </div>
          <hr/>
          <div className="bottInclus">
            <div>
                <p className="starInclusive">*****</p>
                <p className="fromInclusive">from <span className="moneyInclusive">$433pp</span></p>
            </div>
            <div>
              <Button variant="contained" color="primary" style={{padding:"10px",backgroundColor:"#8ab44a"}}>
                View Deals
              </Button>
            </div>
          </div>
        </div>
       
    </div>
     )
 }
}
export default CardInclusive;