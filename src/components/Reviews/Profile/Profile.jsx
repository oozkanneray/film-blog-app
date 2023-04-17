import { useParams } from "react-router-dom";
import { userData } from "../../../userdata";
import { useEffect, useState } from "react";
import UserFavorite from "./UserFavorite";
import UserStats from "./UserStats";

function Profile() {
  const params = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    userData.map((item) => item.userName === params.username && setUser(item));
  });

  return (
    <div className="mx-72 mt-10 flex justify-between">
      <UserStats user={user} />
      <div className="flex flex-col">
      <div className="w-100 font-bold text-xl border-b-2 border-black mb-2">Favorites</div>
      <div className="flex w-100 items-center">
        {userData.map(
          (item) =>
            item.userName === params.username &&
            item.favorites.map((item) => (
              <UserFavorite img={item.film_img} name={item.film_name} />
            ))
        )}
      </div>
      </div>

    </div>
  );
}

export default Profile;
