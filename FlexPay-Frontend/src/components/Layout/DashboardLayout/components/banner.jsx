import heroimg from '../../../../assets/images/plus_icon.png';
import img2 from '../../../../assets/images/contract_icon.png';
import img3 from '../../../../assets/images/mark_icon.png'
function Banner() {
    return ( 
        <div>
            <div className='flex gap-2 text-white bg-[blue] w-fit items-center text-[10px] px-5 py-3 my-5 rounded-lg'>
                <img src={heroimg} alt="dash"/>
                <span>Add new Clients & manage existing one <br />on your client management portal</span>
            </div>
            <div className='flex gap-2 text-white bg-[black] w-fit items-center text-[10px] px-5 py-3 my-5 rounded-lg'>
                <img src={img2} alt='add contract'/>
                <span>Manage contracts, generate one-time <br />& recurring invoices automatically</span>
            </div>
            <div className='flex gap-2 text-white bg-[#8b7b7b] w-fit items-center text-[10px] px-5 py-3 rounded-lg'>
                <img src={img3} alt='' />
                <span>Receive payments from local clients <br /> and transfer to your bank account</span>
            </div>
        </div>
     );
}

export default Banner;