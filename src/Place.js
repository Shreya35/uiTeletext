import React,{Component} from "react";
import Button from '@material-ui/core/Button';

class Place extends Component{
  render(){
      return (
        <div className="cardController">
             
        <div className="cardWrapper">
        <div className="imgtext">
            <h3 className="hStyl">Medinas,beaches</h3>
            <h3 className="hStyl">and more in Morroco</h3>
        </div>
        <div className="belowCardController">
        <div className="belowCard">
            <h4 className="bottomtext">All-Inc Mini breaks</h4>
            <h4 className="bottomtext">from <span className="priceCard">$179pp</span></h4>
        </div>
        <div className="bttnWrapper">
          <Button variant="contained" color="primary" style={{backgroundColor:"#e87340"}}>
             View Details
          </Button>
        </div>
        </div>
       
        </div>
    
</div>
      )
  }
}
export default Place;