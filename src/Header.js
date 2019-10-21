import React,{Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import "./App.css";
class Header extends Component{
  render(){
      const headerData=['HOLIDAYS','CHEAP HOLIDAYS','ALL INCLUSIVE','LAST MINUTE','BLOG']
      return (
          <div className="headerController">
             <AppBar position="static" style={{backgroundColor:"#6e3d7c"}}>
             <Toolbar>
                 <div className="Parent">
                 <div className="above">
                     <div className="aboveWrapper">
                         <div className="callContainer wrapper">
                             <span>Call now to book</span>
                             <span className="marginStyl"><img src="/phone.svg"/></span>
                             <span className="marginStyl boldNo">0196 278 5294</span>
                            
                          </div>
                         <div className="wrapper">
                             <p className="removeMargin" style={{fontSize:"18px"}}>Customer Support</p>
                             <span><img src="/down-icon.svg" style={{marginLeft:"7px"}}/></span>
                         </div>
                         <div className="wrapper lineDrawn">
                             <p className="removeMargin" style={{marginLeft:"10px",color:"#DB9861",fontSize:"17px"}}>Download App</p>
                         </div>
                         <div className="wrapper">
                             <span><img src="/user.png"/></span>
                         </div>
                     </div>
               </div>
              { /**Below */}

               <div className="below">
                   <div className="headerLogo">
                      <h2 style={{margin:"0"}}>teletext holidays</h2>
                   </div>
                   <div className="liContainer">
                        <ul className="ulContainer">
                            {headerData.map((data,index)=>{
                                return <li className="listItem"><span className="texxStyl">{data}</span>{data.toLowerCase() ==='holidays'&&<span><img src="/down-icon.svg" style={{marginLeft:"10px"}}/></span>}</li>
                            })}
                        </ul>
                   </div>
               </div>
               
                 </div>
               
                 
        </Toolbar>
 
             </AppBar>
          </div>
      )
  }
}
export default Header;