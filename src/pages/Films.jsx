import { useState } from "react";
import Filmreview from "../components/Reviews/Filmreview";
import Star from "../components/Reviews/Profile/Star";
import { userData } from "../userdata";
import Button from "../components/Reviews/Button";

function Films() {
  const [current, setCurrent] = useState("All");

  const handleCurrent = (value) => {
    setCurrent(value);
  };

  return (
    <div className="">
      <div className=" ml-24 mt-5">
        <div className="text-4xl font-bold m-5">{current} Reviews</div>
        <button
          className="m-2"
          onClick={() => {
            handleCurrent("All");
          }}
        >
          All Reviews
        </button>
        {userData.map((item) => (
          <Button
            userName={item.userName}
            current={current}
            handleCurrent={handleCurrent}
          />
        ))}
      </div>

      <Filmreview />
      <Filmreview />
      <Filmreview />
      <Filmreview />
      <Filmreview />
    </div>
  );
}

export default Films;
