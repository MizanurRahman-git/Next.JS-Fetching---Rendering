"use client";

import Image from "next/image";
import { useState } from "react";

const ReviewCard = ({ review }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(review.likes.length);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="max-w-md rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* User info */}
      <div className="flex items-center gap-4">
        {/* <img
          src={review.photo}
          alt={review.user}
          className="h-12 w-12 rounded-full object-cover"
        /> */}

        <Image
          src={review.photo}
          alt={review.user}
          className="h-12 w-12 rounded-full object-cover"
          width={48}
          height={48}
        />
        <div>
          <h3 className="font-semibold text-gray-800">{review.user}</h3>
          <p className="text-sm text-gray-500">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-3 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < review.rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review */}
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        {review.review}
      </p>

      {/* Like button */}
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition
            ${
              liked
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          👍 Like
        </button>
        <span className="text-sm text-gray-500">{likes} likes</span>
      </div>
    </div>
  );
};

export default ReviewCard;
