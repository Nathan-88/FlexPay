import { Link } from "react-router-dom";
import Hero from '../assets/images/HeroPic.png';
import plus from '../assets/images/plus_icon.png';
import mark from '../assets/images/mark_icon.png';
import contract from '../assets/images/contract_icon.png';

const HeroSec = () => {
    return (
        <section className="p-4 flex-1">
            <div className="flex">
                <div className="flex flex-col mx-6 pt-8 w-1/2">
                    <h1 className="text-5xl font-bold leading-[3.3rem]">All In-One <br/> Clients Management <br/> Solution For Solpreneurs</h1>
                    <p className="text-xl font-medium mt-6 w-3/4">Manage clients, sends invoices and receive payments seamlessly</p>
                    <button className="mt-8 text-start">
                        <Link to="/contact" className='text-white  bg-blue-700 rounded-3xl px-4 py-2'>Signup</Link>
                    </button>
                    <p className="mt-7 w-3/4 xl">Over 10,000 solopreneur&apos;s and freelencers use <span className="text-black font-bold">FlexPay</span> to manage their clients</p>
                </div>
                <div className="w-1/2 pt-8">
                    <img src={Hero} alt="hero" className="w-full rounded-xl" />
                </div>
            </div>
            <div className="mt-20 mx-6">
                <p className="font-bold"> With Flexpay you can:</p>
                <div className="flex mt-4 w-full gap-10">
                    <div className="flex w-1/3 bg-blue-500 shadow-lg p-4 gap-3 rounded-lg">
                        <img src={plus} alt="add clients" className="w-16"/>
                        <p className="text-white">Add new Clients & manage existing one on your client management portal</p>
                    </div>
                    <div className="flex w-1/3 bg-black shadow-lg p-4 rounded-lg gap-3">
                        <img src={contract} alt="manage contracts" className=""/>
                        <p className="text-white">Manage contracts, generate one-time & recurring invoices automatically</p>
     
                    </div>
                    <div className="flex bg-gray-300 shadow-lg p-4 rounded-lg w-1/3 gap-3">
                        <img src={mark} alt="receive payments" className="w-[4.5rem]"/>
                        <p>Receive payments from local clients and transfer to your bank account</p>
                    </div>
                </div>
                <div className="flex justify-between my-7 text-xl font-medium w-3/4">
                    <p className="">Take your business to another level</p>
                    <p className="text-blue-800 font-bold">FAQ</p>
                </div>
                <button className="mb-3 border-2 border-blue-700 hover:bg-blue-500 hover:text-white text-blue-700 font-medium rounded-3xl px-4 py-2"><Link to="/contact" className=' '>Create Account</Link></button>
                
            </div>
        </section>
    );
}

export default HeroSec;