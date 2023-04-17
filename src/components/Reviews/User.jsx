import { list } from "postcss";
import { Link } from "react-router-dom";
import Profile from "./Profile/Profile";

function User({ userName, userImg, watched, lists, name, likes }) {
  return (
    <div className="flex m-5 border-b-2 border-black p-1">
      <div>
        <img
          className="w-16 rounded-full object-cover"
          src={userImg}
          alt="avatar"
        />
      </div>
      <div className="flex flex-col ml-3 w-10">
        <Link to={userName}>
          <div className="font-bold text-xl">{userName}
          </div>
        </Link>
        <div>{name}</div>
      </div>
      <div className="flex w-[100%] ml-2 justify-evenly text-center">
        <div className="w-10 text-center text-lg font-bold">{lists}</div>
        <div className="w-10 text-center text-lg font-bold">{watched}</div>
        <div className="w-10 text-center text-lg font-bold">{likes}</div>
      </div>
      <div></div>
    </div>
  );
}

export default User;
