import Event from "../Events/Event";
import TopArtists from "../Top artist/TopArtists";
import Banner from "../Header/Banner";
import Features from "../Features/Features";
const Home = () => {
  return (
    <div>
      <Banner />
      <Event/>
     <Features/>
     <TopArtists/>
    </div>
  );
};

export default Home;
