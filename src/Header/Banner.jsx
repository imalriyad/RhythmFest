const Banner = () => {
  return (
    <div className="px-4">
      <div
        className="rounded-xl h-auto "
        style={{
          backgroundImage: "url(https://i.ibb.co/D8M0PwN/hero.jpg)",
          objectFit:'cover'
        }}
      >
        <div className="md:px-8 px-4">
          <div className="md:py-[13%] py-[10%] md:px-10">
          <h1 className="mb-6 md:text-5xl text-3xl font-bold">
            Music to fill your <span className="text-maincolor font-bold">heart</span>
          </h1>
          <p className="mb-6 text-lg">
            Get playlists and albums inspired by the artists and genres <br /> you are
            listing to. 1 month free.
          </p>
          <button className="btn normal-case md:px-8 px-6">Try it free</button>
          <button className=" btn ml-3 btn-outline normal-case md:px-8 px-6">Discover</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
