import PropTypes from "prop-types";
import toast from "react-hot-toast";

const PostCard = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleDonation = (eventId, recipientId) => {
    if (user?.blood_group !== post?.blood_group) {
      toast.error("Your blood group does not match with this request!");
      return;
    }
    const payload = {
      event_id: eventId,
      recipient_id: recipientId,
    };

    console.log(payload);
    fetch("https://blood-aid-backend.vercel.app/dashboard/create/", {
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

  // Check if the logged-in user is the creator
  const isMyPost = localStorage.getItem("username") === post.creator;

  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden mb-6">
      {/* Card Content */}
      <div className="p-5 space-y-4">
        {/* Title and Blood Group */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
          <span className="text-xs text-white bg-red-500 px-3 py-1 rounded">
            {post?.blood_group}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm">
          <strong>Description:</strong> {post?.description}
        </p>

        {/* Address */}
        <p className="text-gray-700 text-sm">
          <strong>Address:</strong> {post?.address}
        </p>

        {/* Date */}
        <p className="text-gray-600 text-xs">
          <strong>Created at:</strong>{" "}
          {new Date(post.created_at).toLocaleString()}
        </p>
      </div>

      {/* Action Button & Poster Info */}
      <div className="flex justify-between items-center p-4 border-t border-gray-200">
        {/* Accept Button (Hidden if it's the user's own post) */}
        {!isMyPost && (
          <button
            onClick={() => handleDonation(post.id, post.creator_id)}
            className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-all duration-300"
          >
            Accept
          </button>
        )}

        {/* Poster Information */}
        <div className="text-xs text-gray-600">
          <span className="font-medium">Posted by:</span>{" "}
          {isMyPost ? "My Post" : post.creator}
        </div>
      </div>
    </div>
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
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
