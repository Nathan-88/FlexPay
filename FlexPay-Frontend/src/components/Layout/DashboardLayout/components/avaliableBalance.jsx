import { MdError } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";

function AvailableBalance() {
  return (
    <div className="flex item-center gap-24 bg-black w-fit p-3 rounded-lg text-white pr-10">

      <div>
        <span className="opacity-50">Available Balance</span>
        <h1 className="py-2 text-[30px]">
          $140,000 <span className="opacity-50 text-[20px]">.00</span>
        </h1>
        <span className="flex items-center gap-2">
          <span className="opacity-50">Payout Balance:</span> $139,900.99
          <span className="text-[red]">
            <MdError />
          </span>
        </span>
      </div>
      
      <div className="text-[25px] opacity-50 flex items-center">
        <FaEyeSlash />
      </div>

    </div>
  );
}

export default AvailableBalance;
