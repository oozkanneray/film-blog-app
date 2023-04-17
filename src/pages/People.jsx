import { userData } from "../userdata";
import User from "../components/Reviews/User";
import { useParams } from "react-router-dom";
import Profile from "../components/Reviews/Profile";

function People() {


  const params = useParams();
  if(params.username === "ebaytheway") {
    return <Profile/>
  }
  return (
    <div className="mx-96 mt-10">
      <div className="text-4xl font-bold m-5 mb-10">-People-</div>

      <div>
        <div className="flex m-5 border-b-2 border-black p-1">
          <div>
            <div
              className="w-16 rounded-full object-cover"
            />
          </div>
          <div className="flex w-[100%] justify-evenly items-center">
            <div className="ml-16 text-center text-lg font-bold">Lists</div>
            <div className="text-center text-lg font-bold">Watched</div>
            <div className="text-center text-lg font-bold relative right-2">Likes</div>
          </div>
        </div>

        {userData.map((item) => (
          <User
            userImg={item.img_src}
            userName={item.userName}
            watched={item.watched}
            name={item.name}
            lists={item.lists}
            likes={item.likes}
          />
        ))}
      </div>
    </div>
  );
}

export default People;
