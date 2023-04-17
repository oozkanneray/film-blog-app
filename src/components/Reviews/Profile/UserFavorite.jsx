function UserFavorite({name,img}) {
    if(name === null){
        return(
            <div className="flex flex-col">
                <div className="flex items-center justify-center border-white border-4">
                    <img className="w-40" src={img} alt="" />
                </div>
                <div className="font-bold text-center w-40 flex justify-center h-16"> No Favorite </div>
            </div>
        )
    } else {
        return ( 
            <div className="flex flex-col">
                <div className="flex items-center justify-center border-white border-4">
                    <img className="w-40" src={img} alt="" />
                </div>
                <div className="font-bold text-center w-40 flex justify-center h-16">{name}</div>
            </div>
         );
        
    }

}

export default UserFavorite;