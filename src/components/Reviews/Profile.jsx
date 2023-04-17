import { useParams } from "react-router-dom";
import { userData } from "../../userdata";
import { useEffect, useState } from "react";

function Profile() {
  const params = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    userData.map((item) => item.userName === params.username && setUser(item));
  });

  return (
    <div className="mx-72 mt-10 flex justify-between">
      <div className="flex flex-row items-center">
        <img className="w-24 rounded-full" src={user.img_src} alt="" />
        <div className="ml-3 flex flex-col ">
          <div className="font-bold text-2xl">{user.userName}</div>
          <div className="text-lg">{user.name}</div>
        </div>
        <div className="flex text-xl text-center h-16 border-l-2 border-black ml-5 items-center">
        <div className="mx-5">
          <div className="font-bold">Watched</div>
          <div>{user.watched}</div>
        </div>
        <div className="mx-5">
          <div className="font-bold">Lists</div>
          <div>{user.watched}</div>
        </div>
        <div className="mx-5">
          <div className="font-bold">Likes</div>
          <div>{user.watched}</div>
        </div>
      </div>
      </div>  
    </div>
  );
}

export default Profile;
