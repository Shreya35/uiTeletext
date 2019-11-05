import React,{Component} from "react";
class AppStore extends Component{
  render(){
    let rightdata1=['Teletext Holidays','Contact us','About us','Press Centre','Privacy','Cookies','Terms & Conditions','Terms of Use','Site Map'];

    let rightdata2 = ['Explore','My Booking','My Holidays','Customer Support','Holiday Payments','Reviews','Blog','FAQs','Card Fees']
      return(
          <div>
             <div className="appStoreContainer">
             <div className="leftappStoreWrapper">
                <div className="appStoreHead1">
                    <p className="appStoreMarg">Get the FREE</p>
                </div>
                <div className="appStoreHead2">
                   <p className="appStoreMarg" style={{color:"#57585b"}}><span style={{color:'#6e3d7c'}}>Teletext Holidays</span> app now!</p>
                </div>
                <div className="appStorePara">
                  <p className="appStoreMarg">Explore and book your dream holiday with the Teletext Holidays app.</p>
                  <p className="appStoreMarg">Its your one-stop shop for all your need to make your holiday stress-free</p>
                </div>
                <div className="appStoreImgContainer">
                  <img src="/app-store.svg"/>
                  <img className="sideAppStoreImg" src="/google-play.svg"/>
                </div>
             </div>

             <div className="rightappStoreWrapper">
                   <div className="rightappStore1">
                      <ul className="ulAppStore">
                        {rightdata1.map((data1,index)=>{
                          return (
                            <li className={data1==="Teletext Holidays"?"headliAppStore":"liAppStore"}>
                              {data1}
                            </li>
                          )

                        })}
                      </ul>
                   </div>
                   <div className="rightappStore2">
                      <ul className="ulAppStore">
                        {rightdata2.map((data2,index)=>{
                          return (
                            <li className={data2==="Explore"?"headliAppStore":"liAppStore"}>
                              {data2}
                            </li>
                          )
                        })}
                      </ul>
                   </div>
             </div>
          </div>
         <div className="lineeAppStore">

         </div>
          </div>
          
      )
  }
}
export default AppStore;