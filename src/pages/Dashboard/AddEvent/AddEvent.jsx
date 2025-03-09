import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddEvent = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleAddEvent = (data) => {
    const event = {
      title: data.title,
      description: data.description,
      blood_group: data.blood_group,
      address: data.address, // Include address in the event data
    };

    console.log(event);

    fetch("https://blood-aid-backend.vercel.app/event/create/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Token ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          toast.success(data.message);
          reset();
        } else {
          toast.error(data.error || "Event creation failed");
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Create Event</title>
      </Helmet>
      <div className="min-h-screen flex justify-center items-center  p-6">
        <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Create Blood Request
          </h1>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit(handleAddEvent)}
          >
            {/* Title Field */}
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-600">
                Title
              </label>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Enter title for blood request..."
                className="input input-bordered w-full p-3 rounded-lg border-gray-300"
              />
              {errors.title && (
                <p role="alert" className="text-sm text-red-500 mt-2">
                  {errors.title?.message}
                </p>
              )}
            </div>

            {/* Blood Group Field */}
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-600">
                Blood Group
              </label>
              <select
                {...register("blood_group", {
                  required: "Blood group is required",
                })}
                className="select select-bordered w-full p-3 rounded-lg border-gray-300"
              >
                <option disabled selected>
                  Please Select Blood Group
                </option>
                <option>O+</option>
                <option>O-</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>

            {/* Description Field (Now using Textarea) */}
            <div className="form-control md:col-span-2">
              <label className="label text-sm font-medium text-gray-600">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Enter description for blood request..."
                rows="4"
                className="textarea textarea-bordered w-full p-3 rounded-lg border-gray-300"
              ></textarea>
              {errors.description && (
                <p role="alert" className="text-sm text-red-500 mt-2">
                  {errors.description?.message}
                </p>
              )}
            </div>

            {/* Address Field */}
            <div className="form-control md:col-span-2">
              <label className="label text-sm font-medium text-gray-600">
                Address
              </label>
              <input
                {...register("address", { required: "Address is required" })}
                type="text"
                placeholder="Enter address for blood request..."
                className="input input-bordered w-full p-3 rounded-lg border-gray-300"
              />
              {errors.address && (
                <p role="alert" className="text-sm text-red-500 mt-2">
                  {errors.address?.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200"
              >
                Create Blood Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
