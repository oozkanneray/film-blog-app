import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Instagram from "./assets/png/Instagram.png"
import Github from "./assets/png/Github.png"
import Search from "./assets/png/Search.png"
import Linkedin from "./assets/png/Linkedin.png"

function Navbar() {


  return (
    <div className="w-100 ">
        <nav className="w-100 h-24 flex items-center p-10 pb-16 justify-evenly text-xl  border-black">
      <div className="flex justify-start items-center">
      <Link to="/">
      <h1 className="relative text-3xl border-r-2 border-black p-5">
          bİ'LOG
        </h1>
      </Link>
        <ul className="flex p-5">
          <Link to="films">
          <li className="ml-10">Films</li>
          </Link>
          <Link to="tv-series">
          <li className="ml-10">Tv Series</li>
          </Link>
          <Link to="people">
          <li className="ml-10">People</li>
          </Link>
        </ul>
      </div>
      <div className="flex p-10 justify-center items-center">
        <input
          type="text" 
          placeholder="Search..."
          className="bg-gray-200 rounded-xl h-10 placeholder:left-3 placeholder:relative"
        />
        <button className="rounded-full w-14 h-10 flex items-center justify-center bg-black ml-5 text-white">
          <img src={Search} className="h-7" alt="" />
        </button>
        <div className="flex relative left-16">
        <h1 className="ml-5">
          <a href="https://github.com/oozkanneray" target="_blank">
            <img src={Github} className="w-7" alt="" />
          </a>
        </h1>
        <h1 className="ml-5">
          <a href="https://www.instagram.com/oozkanneray/" target="_blank">
            <img src={Instagram} className="w-7" alt="" />
          </a>
        </h1>
        <h1 className="ml-5">
          <a href="https://www.linkedin.com/in/eray-%C3%B6zkan-544894228/" target="_blank">
          <img src={Linkedin} className="w-7" alt="" />
          </a>
        </h1>
        </div>
      </div>
    </nav>
    <Outlet/>
    </div>

  );
}

export default Navbar;
