import { useParams } from "react-router-dom";
import { userData } from "../../../userdata";
import { useEffect, useState } from "react";
import UserFavorite from "./UserFavorite";
import UserStats from "./UserStats";
import UserReviews from "./UserReviews";

function Profile() {
  const params = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    userData.map((item) => item.userName === params.username && setUser(item));
  });

  return (
    <div className="flex flex-col mx-72 mt-10">
      <div className="flex justify-between">
        <UserStats user={user} />
        <div className="flex flex-col">
          <div className="w-100 font-bold text-xl border-b-2 border-black mb-2">
            Favorites
          </div>
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
      <div className="my-20">
        <div className="text-2xl font-bold w-96 border-b-2 border-black p-2 mb-10">
          Reviews
        </div>
        <div className="flex flex-wrap">
        {userData.map(
          (item) =>
            item.userName === params.username &&
            item.reviews.map((item) => (
              <UserReviews
                img={item.film_img}
                review={item.review}
                name={item.film_name}
                rating={item.rating}
              />
            ))
        )}  
        </div>       
      </div>
    </div>
  );
}

export default Profile;
