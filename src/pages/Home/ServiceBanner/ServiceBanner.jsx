import img from "../../../assets/home/donation1.jpg";
import img2 from "../../../assets/home/home8.jpg";

const ServiceBanner = () => {
  return (
    <>
      <p className="text-red-600 text-center text-2xl font-bold mt-10">
        What We Do
      </p>
      <h2 className="text-center text-black text-3xl md:text-6xl font-extrabold mt-10">
        our best services
      </h2>
      {/* section 1 */}
      <section className="md:h-[100vh] overflow-hidden mb-10">
        <section className="">
          <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center  my-8 lg:mt-0 ">
              <img
                src={img}
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded"
              />
            </div>
            <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-extrabold leading-none sm:text-5xl">
                Blood Donation
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 text-slate-600">
                Blood Donation refers to the voluntary act of giving blood for
                medical purposes, typically to help individuals who need blood
                transfusions due to surgery, injury, or illness.
              </p>
              <button className="btn btn-error w-1/3 text-white">
                Read More
              </button>
            </div>
          </div>
        </section>
      </section>
      {/* section 2 */}
      <section className="md:h-[100vh] overflow-hidden my-10 lg:my-0">
        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
          <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-extrabold leading-none sm:text-5xl">
              Health Check
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-slate-600">
              Health Check refers to a comprehensive evaluation of an
              individual’s overall health through medical examinations,
              diagnostic tests, and consultations with healthcare professionals.
            </p>
            <button className="btn btn-error w-1/3 text-white">
              Read More
            </button>
          </div>
          <div className="flex items-center justify-center  my-8 lg:mt-0 ">
            <img
              src={img2}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBanner;
