import { redirect } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const {details} = await res.json();
  
  return {
    title: details.title
  }
}

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const data = await res.json();
  return data.details;
};

const page = async ({ params }) => {
  const { id } = await params;

  const food = await getSingleFood(id);

  if (!food.title) {
    redirect('/foods')
    // return (
    //   <h2 className="text-center py-20 text-xl font-semibold">
    //     Food Not Found❌
    //   </h2>
    // );
  }

  const { title, foodImg, price, video, category, area } = food;
  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        className="w-full h-72 object-cover rounded-xl shadow"
        src={foodImg}
        alt=""
      />

      <h1 className="text-3xl font-bold mt-5">{title}</h1>

      <div className="flex gap-4 mt-2 text-gray-600">
        <p className="bg-gray-100 px-3 py-1 rounded-lg text-sm">{category}</p>
        <p className="bg-gray-100 px-3 py-1 rounded-lg text-sm">{area}</p>
      </div>

      <p className="text-2xl font-semibold mt-4 ">{price}৳</p>

      <div className="flex gap-4 mt-6">
        <a
          href={video}
          target="_blank"
          className="flex-1 bg-red-600 text-white py-3 rounded-lg text-center hover:bg-red-700"
        >
          Watch Video
        </a>

        <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default page;
