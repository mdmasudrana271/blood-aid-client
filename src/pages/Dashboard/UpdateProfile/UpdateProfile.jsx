import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loader from "../../../components/Spinner/Loader";

const UpdateProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const donor_id = localStorage.getItem("donor_id");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://blood-aid-backend.vercel.app/account/list/${donor_id}/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Token ${localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // setProfile(data);
        reset({
          username: data?.user.username || "",
          first_name: data?.user.first_name || "",
          last_name: data?.user.last_name || "",
          adress: data?.address || "",
          age: data?.age || "",
          phone: data?.phone || "",
          blood_group: data?.blood_group || "",
          available_donation: data?.is_available_for_donation || false,
        });
        setLoading(false);
      });
  }, [donor_id, reset]);

  const handleProfile = (data) => {
    const createdUser = {
      user: {
        username: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
      },
      age: parseInt(data.age, 10),
      phone: data.phone,
      address: data.adress,
      is_available_for_donation: data.available_donation,
      blood_group: data.blood_group, // Send blood group if available
    };
    fetch(`https://blood-aid-backend.vercel.app/account/list/${donor_id}/`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Token ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(createdUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("update data", data);
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("Profile updated successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <Helmet>
        <title>Update profile</title>
      </Helmet>
      <div className="container mx-auto px-4 py-10 mt-16">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-6 border border-red-200">
          <div>
            <h1 className="text-4xl text-center font-bold">Update Profile</h1>
            <form className="mt-6" onSubmit={handleSubmit(handleProfile)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  {...register("username", {
                    // required: "First Name is required",
                  })}
                  // defaultValue={profile?.user.first_name}
                  disabled
                  type="text"
                  placeholder="Enter Your User Name"
                  className="input input-bordered w-full"
                />
                {errors.first_name && (
                  <p role="alert" className="text-error">
                    {errors.first_name?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  {...register("first_name", {
                    // required: "First Name is required",
                  })}
                  // defaultValue={profile?.user.first_name}
                  type="text"
                  placeholder="Enter Your First Name"
                  className="input input-bordered w-full"
                />
                {errors.first_name && (
                  <p role="alert" className="text-error">
                    {errors.first_name?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  {...register("last_name", {
                    // required: "Last Name is required",
                  })}
                  // defaultValue={profile?.user.last_name}
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="input input-bordered w-full"
                />
                {errors.last_name && (
                  <p role="alert" className="text-error">
                    {errors.last_name?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Adress</span>
                </label>
                <input
                  {...register("adress", {
                    // required: "Adress is required",
                  })}
                  // defaultValue={profile?.address}
                  type="text"
                  placeholder="Enter Your Adress"
                  className="input input-bordered w-full"
                />
                {errors.adress && (
                  <p role="alert" className="text-error">
                    {errors.adress?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  {...register("age", {
                    // required: "Age Name is required",
                  })}
                  // defaultValue={profile?.age}
                  type="number"
                  placeholder="Enter Your Last Name"
                  className="input input-bordered w-full"
                />
                {errors.age && (
                  <p role="alert" className="text-error">
                    {errors.age?.message}
                  </p>
                )}
              </div>
              {/* Phone Number Field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/, // Basic validation for 10-15 digit numbers
                      message: "Enter a valid phone number",
                    },
                  })}
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="input input-bordered w-full"
                />
                {errors.phone && (
                  <p role="alert" className="text-error">
                    {errors.phone?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Blood Group</span>
                </label>
                <select
                  {...register("blood_group", {
                    // required: "Blood group is required",
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
              <div className="form-control w-full mt-4">
                <label>
                  <input type="checkbox" {...register("available_donation")} />
                  Available for Donation
                </label>
              </div>
              <input
                className="btn btn-outline btn-error w-full mt-5 text-xl font-bold"
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
