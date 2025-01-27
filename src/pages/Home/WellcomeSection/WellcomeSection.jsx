import img from "../../../assets/home/home71.jpg";

const WellcomeSection = () => {
  return (
    <>
      <section className="md:h-[100vh] overflow-hidden my-5">
        <section className="">
          <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center  mt-8 lg:mt-0 ">
              <img
                src={img}
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
            <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <p className="text-error md:text-3xl text-md font-bold my-5">
                Help The People in Need
              </p>
              <h1 className="md:text-5xl font-extrabold leading-none text-xl">
                Welcome to Blood <br /> Donors Organization
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                This organization is dedicated to saving lives by connecting
                those in need of blood with compassionate donors. We strive to
                build a community of kindness and care, ensuring that no one
                faces a medical emergency without access to lifesaving blood.
              </p>
              <button className="btn btn-error w-1/3 text-white">
                Explore More
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default WellcomeSection;
