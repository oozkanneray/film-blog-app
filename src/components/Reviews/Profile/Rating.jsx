import Star from "./Star";
import halfstar from "../../../assets/png/halfstar.png";
import fullstar from "../../../assets/png/fillStar.png";
import { useState } from "react";


function Rating({rating}) {

  const [star, setStar] = useState(Math.round(rating - 1));

    return ( 
        <div className="flex items-center m-5">Rating:
        {star - (rating - 1) > 0 ?
        <div className="flex">
            {[...Array(Math.round(star))].map(item => <Star/>)}
            <img className="w-8 m-2" src={halfstar}></img>
        </div>
        :
        <div className="flex">
            {[...Array(Math.round(star))].map(item => <Star/>)}
            <img className="w-8 m-2" src={fullstar}></img>
        </div>    
    }
        </div>
     );
}

export default Rating;