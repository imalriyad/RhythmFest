const Banner = () => {
  return (
    <div>
      <div
        className="rounded-lg h-[70vh] md:h-[60vh] "
        style={{
          backgroundImage: "url(https://i.ibb.co/nrRXBGQ/hero.jpg)",
          objectFit:'cover'
        }}
      >
        <div className="md:px-8 px-4">
          <div className="md:py-[13%] py-[10%] md:px-10">
          <h1 className="mb-5 md:text-5xl text-3xl font-bold">
            Music to fill your <span className="text-primary font-bold">heart</span>
          </h1>
          <p className="mb-5">
            Get playlists and albums inspired by the artists and genres <br /> you are
            listing to. 1 month free.
          </p>
          <button className="btn btn-primary ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
