import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center px-4  my-[14%] space-y-5">
            <h1 className="text-7xl">4<span className="text-maincolor">0</span>4</h1>
            <h1 className="md:text-xl max-w-2xl text-sm mx-auto">Sorry! But the page you are looking for does not exist, have been removed. Name change or is temporarily unavailable</h1>
            <Link to={'/'}><button className="btn rounded-xl text-white bg-maincolor mt-5 hover:bg-maincolor">Go To Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;