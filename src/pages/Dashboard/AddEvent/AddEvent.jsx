import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // const navigate = useNavigate();

  const handleAddLesson = (data) => {
    const event = {
      title: data.title,
      description: data.description,
      blood_group: data.blood_group,
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
          // navigate("/adminDashboard/lessonsmanagement");
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
      <div className=" p-7">
        <h1 className="text-3xl font-bold">Request for blood</h1>
        <form className="mt-6" onSubmit={handleSubmit(handleAddLesson)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              {...register("title", {
                required: "Title is required",
              })}
              type="text"
              placeholder="Enter title for blood request..."
              className="input input-bordered w-full"
            />
            {errors.title && (
              <p role="alert" className="text-error">
                {errors.title?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              {...register("description", {
                required: "Description is required",
              })}
              type="text"
              placeholder="Enter description for blood request..."
              className="input input-bordered w-full"
            />
            {errors.description && (
              <p role="alert" className="text-error">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Blood Group</span>
            </label>
            <select
              {...register("blood_group", {
                required: "Blood group is required",
              })}
              className="select select-bordered w-full"
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
          <input
            className="btn btn-error w-full mt-5"
            value="Create Blood Request"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default AddEvent;
