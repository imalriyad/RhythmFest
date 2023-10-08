
const About = () => {
    const services = ["Event Listings", "Ticket Purchase", "News and Updates", "Artist Profiles"];

  return (
    <div className="px-4 max-w-2xl mx-auto">
      <h1 className="md:text-5xl text-center my-10 text-4xl font-semibold">About Us</h1>
      <p>
      RhythmFest is an online platform dedicated to providing music enthusiasts with a curated and ever-changing list of music events and concert listings. It is your one-stop destination for discovering and purchasing tickets to your favorite music events and festivals.
      </p>
      <p className="md:block mt-5  mb-14 hidden">
        <span className="text-2xl font-semibold">In Conclusion: </span>
 RhythmFest is a user-centric online platform designed for music enthusiasts and concert lovers. It offers a diverse selection of music event listings, streamlined ticket purchasing, and personalized recommendations to enhance the user experience. Whether youre a fan of rock, hip-hop, electronic, or any other music genre, RhythmFest serves as your gateway to unforgettable live music experiences and keeps you connected to the vibrant world of music.</p>
      <p>
        <h1 className="text-2xl my-5 md:text-4xl font-semibold">Services We Provide</h1>
   {services.map(service=> <li key={service} className="mt-3" >{service}</li>)}
      </p>
    </div>
  );
};

export default About;
