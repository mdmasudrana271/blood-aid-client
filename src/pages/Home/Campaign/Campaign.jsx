import img1 from "../../../assets/campaign_img/img1.jpg";
import img2 from "../../../assets/campaign_img/img2.jpg";
import img3 from "../../../assets/campaign_img/img3.jpg";
import img4 from "../../../assets/campaign_img/img4.jpg";
import img5 from "../../../assets/campaign_img/img5.jpg";
const Campaign = () => {
  return (
    <div className="my-10 p-10 bg-slate-50">
      <h1 className="text-error text-center font-bold text-3xl">
        Our Blood Donation History
      </h1>
      <div className="relative flex items-center justify-center w-full dark:text-gray-900">
        <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={img1}
              alt="Image 1"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={img2}
              alt="Image 2"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={img3}
              alt="Image 3"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={img4}
              alt="Image 4"
            />
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={img5}
              alt="Image 5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
