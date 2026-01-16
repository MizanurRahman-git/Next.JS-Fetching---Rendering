"use client";
import { useRouter } from "next/navigation";
import React from "react";

const FeedbackForm = ({ postFeedbacks }) => {
  const route = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    // const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ message }),
    // });

    // const data = await res.json();


    const data = await postFeedbacks(message)

    if (data.insertedId) {
      alert("Succes");
      route.push("/feedbacks");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5 text-center">
        <textarea
          className="w-xl border border-dashed rounded"
          name="message"
          id=""
          cols={30}
          rows={10}
          required
        ></textarea>
        <hr />
        <button className="btn">Add Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
