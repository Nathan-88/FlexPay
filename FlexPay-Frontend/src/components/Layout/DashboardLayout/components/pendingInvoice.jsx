import { IoIosArrowForward } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";

function PendingInvoice() {
  return (
    <div className="bg-[pink] py-4 px-6 flex items-center gap-20 rounded-lg" >
      <div>
        <p className="font-bold">Pending Invoice</p>
        <p className="mt-[10px]">Please update/verify your information</p>
        <p>transaction</p>
        <p className="flex items-center gap-1 text-[red] mt-[10px]">
          <span>Complete Transaction</span>
          <span>
            <IoIosArrowForward />
          </span>
        </p>
      </div>

      <div className="text-[100px] text-[red]">
        <GoShieldCheck />
      </div>
    </div>
  );
}

export default PendingInvoice;
