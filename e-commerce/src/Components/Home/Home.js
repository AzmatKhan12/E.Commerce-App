import React,{Fragment} from "react";
import Tours from "./Tours";
import Heading from "../Store/Heading";
import Footer from "../Store/Footer";


const AvailableData = [
  {
    id: "m1",
    date: "Dec 12",
    city: "DETROIT, MI",
    location: "DTE ENERGY MUSIC THEATRE",
    ticket: "BUY TICKETS",
  },

  {
    id: "m2",
    date: "Dec 13",
    city: "TORONTO,ON",
    location: "BUDWEISER STAGE",
    ticket: "BUY TICKETS",
  },

  {
    id: "m3",
    date: "Dec 14",
    city: "BRISTOW,VA",
    location: "JIGGY LUBE LIVE",
    ticket: "BUY TICKETS",
  },

  {
    id: "m4",
    date: "Dec 15",
    city: "PHOENIX,AZ",
    location: "AK-CHIN PAVILION",
    ticket: "BUY TICKETS",
  },

  {
    id: "m5",
    date: "Dec 16",
    city: "LAS VEGAS,NV",
    location: "T-MOBILE ARENA",
    ticket: "BUY TICKETS",
  },

  {
    id: "m6",
    date: "Dec 17",
    city: "CONCORD, CA",
    location: "CONCORD PAVILION",
    ticket: "BUY TICKETS"
  }
];



const Home = props =>{
    
    const ConcertList = AvailableData.map(item =>(
      <Tours
        id = {item.id}
        date = {item.date}
        city ={item.city}
        location ={item.location}
        tickets ={item.ticket}
      />
    ));
    
    return (
      <Fragment>
        <Heading Heading={"The Generics"} title={"Get Our Latest Album"} />
        <main>
          <ul>{ConcertList}</ul>
        </main>
        <Footer title={"The Generics"} />
      </Fragment>
    );
}


export default Home;