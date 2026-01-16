import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";
import CartItems from "./CartItems";
import InputSearch from "@/components/searchFood/InputSearch";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`, {next: {revalidate: 10}}
  );

  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.foods || [];
};

export const metadata = {
  title: "All Foods",
  description: "Best Fast Food in Rangpur",
};

const FoodPage = async ({searchParams}) => {
  const {search=""} = await searchParams;
  const foods = await getFoods(search);

  return (
    <div>
      <div className="flex justify-between items-center">
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-500">{foods.length}</span> Found
      </h2>

        <InputSearch/>
      </div>
      <div className="flex gap-5 mt-6">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        <div className="w-62.5 rounded-xl border-2 p-4">

          <h2 className="text-2xl font-bold">Cart Items</h2> <hr />
          <CartItems/>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
