function UserStats({ user }) {
  return (
    <div className="flex h-24 items-center">
        <div>
         <img className="w-24 rounded-full" src={user.img_src} alt="" />
        </div>
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
          <div>{user.lists}</div>
        </div>
        <div className="mx-5">
          <div className="font-bold">Likes</div>
          <div>{user.likes}</div>
        </div>
      </div>
    </div>
  );
}

export default UserStats;
