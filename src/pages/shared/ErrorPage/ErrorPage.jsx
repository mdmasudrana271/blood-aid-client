import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-red-500">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              {`Oops! The page you're looking for isn't available.`}
            </p>
            <p className="mt-4 mb-8 text-gray-600">
              {`But don't worry, you can continue helping save lives by visiting
              our homepage.`}
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded bg-red-500 text-white"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
