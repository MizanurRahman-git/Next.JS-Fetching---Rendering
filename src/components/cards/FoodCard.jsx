import Link from "next/link";
import React from "react";
import CartButton from "../buttons/CartButton";
import Image from "next/image";

const FoodCard = ({ food }) => {
  const { foodImg, title, category, price, id } = food;
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      {/* <img
        src={foodImg}
        alt={title}
        className="w-full h-44 object-cover ronuded-lg"
      /> */}

      <Image
        src={foodImg}
        alt={title}
        className="w-full h-44 object-cover ronuded-lg"
        width={300}
        height={150}
      />

      <div className="mt-3">
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{price}৳</p>
        <div className="flex gap-3 mt-4">
          <CartButton food={food} />
          <Link
            href={`/foods/${id}`}
            className="flex-1 text-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 hover:text-black"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
