import Artists from "./Artists";

const TopArtists = () => {
    return (
        <div className="md:text-center text-left px-4 mx-auto">
            <h1 className="md:text-[40px] text-[30px] font-bold">Trending <span className='text-maincolor'>Artists</span></h1>
            <p className='text-[#57595B] text-sm md:text-base mt-2 mx-auto max-w-xl mb-20'>Who is the most popular music artist in the world right now? Check out the cross-platform best-performing artists in 2023.</p>
            <Artists/>
        </div>
    );
};

export default TopArtists;