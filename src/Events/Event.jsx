import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const Event = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.npoint.io/5b9e286fdc8f467883c3')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
  return (
    <div className="bg-[#F5F7FA] p-4  md:p-10 rounded my-20">
      <h1 className="md:text-[40px] md:mb-4 text-[30px] font-bold">Upcoming <span className="text-maincolor">Events</span></h1>
      <div className="grid lg:grid-cols-4 mt-10 gap-6 md:grid-cols-2 grid-cols-1">
      {
        data?.map(card =>  <EventCard card={card} key={card.id}/>)
      }
      </div>
     
    </div>
  );
};

export default Event;
