"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;

    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          placeholder="Search Food"
          className="p-2 border rounded"
        />
        <button className="p-2 border rounded cursor-pointer hover:bg-white hover:text-black">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
