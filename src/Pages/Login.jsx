import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { signin } = useContext(AuthContext);
  const loginHandler = (e) => {
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;
    signin(email, password)
      .then(() => {
        e.target.reset()
        toast.success('You are successfully logged in')
      })
      .catch((err) => toast.error(`${err.message.slice(17,).replace(")",'')}`));
  };
  return (
    <div className="px-4">
      <div><Toaster/></div>

      <div className="w-full max-w-sm mx-auto mt-[4%] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <htmlForm className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Login in to our Account
          </h5>
          <form onSubmit={loginHandler}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <a
                href="#"
                className="mt-2 text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
          </form>
          <div className="text-sm flex gap-x-1 font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <p className="text-blue-700 hover:underline dark:text-blue-500 ">
              <Link to={"/Registraion"}>Create account</Link>
            </p>
          </div>
        </htmlForm>
        <div className="divider">continue with</div>
        <div className="flex">
          <button className="btn w-full">
            <img
              className="h-[20px] w-[20px]"
              src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
              alt=""
            />{" "}
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
