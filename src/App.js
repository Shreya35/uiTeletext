import React,{Component} from 'react';
import Header from "./Header";
import BelowHeader from "./BelowHeader";
import MainContent from "./MainContent";
import Holiday from "./Holiday";
import PlaceOption from "./PlaceOption";
import InclusiveDeal from "./InclusiveDeal";
import InclusiveImage from "./InclusiveImage";
import CallNow from "./CallNow";
import HotelDeal from "./HotelDeal";
import SeaType from "./SeaType";
import Review from "./Review";
import ReviewNavigation from "./ReviewNavigation";
import Purple from "./Purple";
import PurpleNav from "./PurpleNav";
import SearchHoliday from "./SearchHolidays";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <BelowHeader/>
        <MainContent/>
        <Holiday/>
        <PlaceOption/>
        <InclusiveDeal/>
        <InclusiveImage/>
        <CallNow/>
        <HotelDeal/>
        <SeaType/>
        <Review/>
        <Purple/>
        <PurpleNav/>
        <SearchHoliday/>
       </div>
    );
  }

}

export default App;
