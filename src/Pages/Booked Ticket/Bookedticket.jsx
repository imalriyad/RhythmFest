import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import EventCard from "../../Events/EventCard";

const Bookedticket = () => {
  const data = useLoaderData();
  const [bookedData, setBookedData] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  useEffect(() => {
    const storedId = JSON.parse(localStorage.getItem("booked"));
    if (storedId) {
      const bookedTicket = data?.filter((item) => storedId.includes(item.id));
      setBookedData(bookedTicket);
    }
    
  }, [data]);

  return (
    <div>
      <h1 className="md:text-4xl text-2xl font-semibold m-8 text-center">
        {bookedData?.length < 1
          ? "You Have not Bought any event ticket yet!"
          : "Ticket You have booked for events"}
      </h1>
      <div className="grid px-4 md:grid-cols-2  lg:grid-cols-4 gap-4">
        {!seeAll
          ? bookedData
              ?.slice(0, 4)
              .map((item) => (
                <EventCard
                  key={item.id}
                  btntitle={true}
                  card={item}
                ></EventCard>
              ))
          : bookedData?.map((item) => (
              <EventCard key={item.id} btntitle={true} card={item}></EventCard>
            ))}
      </div>

      {bookedData?.length > 4 && (
        <div className="text-center my-8 ">
          {" "}
          <button
            onClick={() => setSeeAll(!seeAll)}
            className="btn
        bg-maincolor text-white hover:bg-[#0043A7]"
          >
            {seeAll ? "See Less" : "See all"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Bookedticket;
