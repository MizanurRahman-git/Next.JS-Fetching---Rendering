import { connect } from "@/app/lib/dbconnect";
import FeedbackForm from "@/components/forms/FeedbackForm";
import React from "react";

const AddFeedback = () => {
  const postFeedbacks = async (message) => {
    "use server"
    const result = await connect("feedbacks").insertOne({
      message,
      date: new Date(),
    });

    return result
  };
  return (
    <div>
      <FeedbackForm postFeedbacks={postFeedbacks} />
    </div>
  );
};

export default AddFeedback;
