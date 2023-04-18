import { useEffect, useState } from "react";
import Rating from "./Rating";


function UserReviews({ img, review, name, rating }) {

  if (img === null) {
    return <div className="text-lg font-bold p-2">No Reviews...</div>;
  }
  return (
    <div className="flex mb-24">
      <img src={img} className="w-32 border-gray-900 border-2" alt="" />
      <div className="ml-4 mt-1 flex flex-col justify-around">
        <div className="font-bold text-xl w-60">{name}</div>
        <div className="italic w-96">{review}</div>
        <Rating rating={rating}/>
      </div>
    </div>
  );
}

export default UserReviews;
