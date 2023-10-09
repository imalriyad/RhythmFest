/* eslint-disable react/prop-types */
import { FaMusic } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import { RiCalendarEventFill } from "react-icons/ri";
import { RiLiveFill } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";
import { FaUserEdit } from "react-icons/fa";

const FeatureCard = ({ feature }) => {
  const { id, title, description } = feature;
  const icon = () => {
    if (title === "Millions of songs") {
      return <FaMusic className="text-xl text-maincolor mx-auto my-[30%]" />;
    } else if (title === "Musical events") {
      return (
        <RiCalendarEventFill className="text-xl text-maincolor mx-auto my-[30%]" />
      )
    }
    else if(title === "Live streaming"){
        return (
            <RiLiveFill className="text-xl text-maincolor mx-auto my-[30%]" />
          )
    }
    else if(title === "Ticket Buying"){
        return (
            <IoTicket className="text-xl text-maincolor mx-auto my-[30%]" />
          )
    }
    else if(title === "Event Update"){
        return (
            <HiSpeakerphone className="text-xl text-maincolor mx-auto my-[30%]" />
          )
    }
    else if(title === "User management"){
        return (
            <FaUserEdit className="text-xl text-maincolor mx-auto my-[30%]" />
          )
    }
  };
  return (
    <div>
      <div
        className="card bg-base-100 border shadow-md"
        data-aos={id % 2 == 0 ? "zoom-out-right" : "zoom-out-left"}
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="card-body">
          <div className=" text-center rounded-full bg-blue-300 w-[50px] h-[50px]">
           {icon()}
          </div>
          <h2 className="card-title font-bold mt-2">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
