import logo from "../../../../assets/images/whitelogo.png";
import { CiSearch, CiBank } from "react-icons/ci";
import { FaHashtag } from "react-icons/fa";
import { LuBookMinus } from "react-icons/lu";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

function DashboardSidebar() {
  return (
    <div className="bg-slate-900 h-lvh w-64 pl-3">
      <Link to="/dashboard">
        <img className="px-10" src={logo} alt="Dashboard-logo" />
      </Link>

      <div className="flex items-center gap-3 bg-slate-400  w-fit p-1  rounded-md text-white my-7">
        <span className="font-bold"><CiSearch /></span>
        <input
          type="text"
          name="search"
          id="dashboard_sidebar__search"
          placeholder="Search"
          className="placeholder:border-gray-500"
          style={{background :"transparent", border:"none"}}
        />
      </div>

      <div className="text-white leading-10">
        <ul>
          <li className="flex items-center gap-2">
            <FaHashtag />
            <Link to="" className=" hover:text-blue-500">
              Dashboard
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <LuBookMinus />
            <Link to="" className=" hover:text-blue-500">
              My Client
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <LiaMoneyBillWaveSolid />
            <Link to="" className=" hover:text-blue-500">
              My Invoice
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <CiBank />
            <Link to="" className=" hover:text-blue-500">
              Transaction
            </Link>
          </li>
        </ul>
      </div>

      <div className="text-white mt-40">
        <ul>
          <li className="flex items-center gap-2">
            <BiSupport />
            <Link to="" className=" hover:text-blue-500">
              Support
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <BiSupport />
            <Link to="" className=" hover:text-blue-500">
              Setting
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardSidebar;
