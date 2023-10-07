/* eslint-disable react/prop-types */
import { AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { Link } from "react-router-dom";

const EventCard = ({card}) => {

   const {eventDate,eventDescription,eventImage,eventLocation,eventName,eventTime,ticketPrice,id,} = card
  return (
    <div className="shadow-md border rounded-md relative p-5">
        <img
          className="md:w-[390px] h-[202px] w-full rounded-md "
          src={eventImage}
          alt=""
        />
        <div className="absolute p-1 top-[190px] right-6  text-white">
            {eventDate}
        </div>
        <h1 className="mt-5 text-xl font-semibold">
         {eventName}
        </h1>
        <p className="mt-3 text-ellipsis text-[#878787]">
          {eventDescription?.slice(0,60)} . . .
        </p>
        <div className="flex gap-2 mt-3 items-center">
          <AiFillClockCircle className="text-2xl text-maincolor" />
          {eventTime}
        </div>
        <div className="flex gap-2 mb-3 mt-3 items-center">
          <FaLocationDot className="text-2xl text-maincolor" />
         {eventLocation}
        </div>
        <div className="flex gap-2  mb-14 items-center">
          <BiSolidBadgeDollar className="text-2xl text-maincolor" />
          Ticket Price ${ticketPrice}
        </div>
       <Link to={`/eventdetails/${id}`}> <button className="btn left-[5%] my-5 absolute bottom-0 text-white hover:bg-[#0043a7] bg-maincolor w-[90%]"> <IoTicketSharp className="text-2xl"/>TICKETS & DETAILS</button></Link>
      </div>
 
  );
};

export default EventCard;
