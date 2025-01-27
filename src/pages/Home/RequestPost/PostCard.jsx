import PropTypes from "prop-types";
import toast from "react-hot-toast";
import bg from "../../../assets/home/postbg.avif";
const PostCard = ({ post }) => {
  const handleDonation = (eventId, recipientId) => {
    const payload = {
      event_id: eventId,
      recipient_id: recipientId,
    };

    console.log(payload);
    fetch("https://blood-aid-backend.onrender.com/dashboard/create/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Token ${localStorage.getItem("authToken")}`,
      },

      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          toast.success(data.message);
          window.location.reload();
        } else {
          toast.error(data.error || "Request failed");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="card bg-base-100 image-full shadow-xl">
        <figure>
          <img src={bg} alt="Donor card bg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Recipient: {post?.creator}</h2>
          <p>
            <span className="font-bold">Title:</span> {post.title}
          </p>
          <p>
            <span className="font-bold">Description:</span> {post?.description}
          </p>
          <p>
            <span className="font-bold">Blood Group: </span>

            <span className="text-error font-bold">{post?.blood_group}</span>
          </p>
          <p>
            <span className="font-bold">Status:</span> {post?.status}
          </p>
          <p>
            <span className="font-bold">Created at:</span>{" "}
            {new Date(post.created_at).toLocaleString("en-US", {
              weekday: "long", // "Monday"
              year: "numeric", // "2025"
              month: "long", // "January"
              day: "numeric", // "27"
              hour: "numeric", // "5"
              minute: "numeric", // "11"
              second: "numeric", // "7"
              hour12: true, // "AM/PM"
            })}
          </p>
          <div className="card-actions justify-end">
            <button
              disabled={localStorage.getItem("username") === post.creator}
              onClick={() => handleDonation(post.id, post.creator_id)}
              className="btn btn-error btn-xs"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    creator: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string,
    blood_group: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    creator_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostCard;
