import { useEffect, useState } from "react";
import Star from "./Profile/Star";

function Filmreview() {

    return ( 
        <div className="flex justify-center m-20">
            <img
            src="https://a.ltrbxd.com/resized/film-poster/7/2/1/3/3/3/721333-cocaine-bear-0-230-0-345-crop.jpg?v=4486ee174d" alt="cocaine bear film poster"/>
            <div className="flex flex-col">
                <div className="font-bold text-4xl m-5">Cocaine Bear - 2023</div>
                <div className="bg-gray-200 italic h-14 rounded-lg relative m-5 flex justify-center items-center">
                ROOOOOOOOAAAAAAAAAAR!!!!
                </div>
                <p className="flex items-center m-5">Rating: {[...Array(5)].map(item => <Star/>)}</p>
                <p className="m-5">Reviewed by: ebaytheway</p>
            </div>
        </div>
     );
}

export default Filmreview;