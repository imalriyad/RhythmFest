import Event from "../Events/Event";
import TopArtists from "../Top artist/TopArtists";
import Banner from "../Header/Banner";
const Home = () => {
  return (
    <div>
      <Banner />
      <Event/>
     <TopArtists/>
    </div>
  );
};

export default Home;
