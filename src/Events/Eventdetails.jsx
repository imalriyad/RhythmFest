import { Link, useLoaderData, useParams } from "react-router-dom";
import{ BsFillCalendarDateFill} from 'react-icons/bs';
import { AiFillClockCircle,AiOutlineArrowLeft } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidBadgeDollar } from "react-icons/bi";
const Eventdetails = () => {
  const { eventId } = useParams();
  const data = useLoaderData();
  const filterObj = data?.find((item) => item.id === parseInt(eventId));
  const {
    eventDate,
    eventDescription,
    eventImage,
    eventLocation,
    eventName,
    eventTime,
    ticketPrice,
  } = filterObj;
  return (
    <div
      className="h-auto rounded-lg text-white "
      style={{
        backgroundImage: `url(${eventImage})`,
        objectFit: "cover",
      }}
    >
      <div className="hero-overlay rounded-lg bg-opacity-60">
      <div className="md:flex md:px-10 px-4 items-center  justify-between">
        <div className="md:w-6/12 p-2 md:my-[10%]">
          <h1 className="md:text-5xl text-2xl font-semibold mt-4">
            {eventName}
          </h1>
          <p className="mt-4 mb-3 md:text-base text-xs">{eventDescription}</p>
          <div className="flex gap-2 mt-3 items-center">
          <AiFillClockCircle className="text-2xl text-maincolor" />
          {eventTime}
        </div>
        <div className="flex gap-2 mb-3 mt-3 items-center">
          <FaLocationDot className="text-2xl text-maincolor" />
         {eventLocation}
        </div>
        <div className="flex gap-2 mb-3 items-center">
          <BiSolidBadgeDollar className="text-2xl text-maincolor" />
        Ticket Price ${ticketPrice}
        </div>
        <div className="flex gap-3 items-center">
          <BsFillCalendarDateFill className="text-xl text-maincolor" />
         {eventDate}
        </div>
         <Link to={'/'}> <button className="btn mt-6  hidden lg:flex items-center"><AiOutlineArrowLeft className="text-xl"/>Back To Home</button></Link>
        </div>
        <form className="flex flex-col md:w-4/12 space-y-5 mx-auto">
        <h1 className="md:text-4xl text-2xl font-semibold mt-4">
           Book your ticket before its too late!
          </h1>
        <input type="text" required placeholder="Your Name" className="input input-bordered text-black focus:outline-none input-md w-full max-w-sm" />
         <input type="email" required placeholder="Your Paypal Email" className="input input-bordered text-black focus:outline-none input-md w-full max-w-sm" />
         <input type="number" required placeholder="Your Paypal Number" className="input input-bordered text-black focus:outline-none input-md w-full max-w-sm" />
         <button className="btn max-w-sm">Pay ${ticketPrice} with<img src="https://i.ibb.co/Z6GshGq/paypal-logo.png" className="w-[70px]" alt="" /></button>
        </form>
      </div>
    </div>

  </div>

  );
};

export default Eventdetails;
