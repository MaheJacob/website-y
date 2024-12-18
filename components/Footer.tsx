import Image from "next/image";
import {  PiFacebookLogoFill,  PiInstagramLogoFill, PiLinkedinLogoFill, PiTwitterLogoFill, PiYoutubeLogoFill } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
const Footer = () => {
    return ( 
        <div className=" flex lg:items-center pb-10 flex-col px-8 lg:px-0  bg-baki w-full ">

    
                <div className="lg:flex  lg:space-x-32 md:px-0 ">


                <div className="pt-4">
<Image
    src="/Images/social logo3.png"
    width={1025}
    height={500}
    alt="logo"
    className=" w-28 "
/>
<div className="flex  space-x-2">


<PiInstagramLogoFill className="text-2xl text-white" />
<PiTwitterLogoFill className="text-2xl text-white" />
<PiFacebookLogoFill className="text-2xl text-white" />
<PiYoutubeLogoFill className="text-2xl text-white" />
<PiLinkedinLogoFill className="text-2xl text-white" />
</div>

</div>



                    <div className="flex-col space-y-6 ">
                        <div className="pt-10 font-bold text-white">Quick Links</div>
                        <div className="font-light space-y-4 text-sm text-white">

                            <div>Home</div>
                            <div>About Us</div>
                            <div>Our Process</div>
                            <div>Contact</div>
    
                </div>
                        </div>

                        <div className="flex-col space-y-6 flex ">
                            <div className="pt-10 font-bold text-white">Services</div>
                            <div className="font-light space-y-4 text-sm text-white">

                            <div>Social Media Marketing</div>
                            <div>Social Media Management</div>
                             <div>Content Creation</div>
                            <div>Web development and Management</div>
                            <div>Brand strategy</div>

                            </div>

                        </div>


                        <div className="flex-col space-y-6 flex ">
                            <div className="pt-10 font-bold text-white">Contact Us</div>
                            <div className="font-light space-y-4 text-sm text-white">

                            <div><MdOutlineMail size={25}/> yoursocialexpert2@gmail.com</div>
                            <div><FaPhoneAlt size={25}/> +254791326797</div>
                            <div><MdLocationPin size={25}/> Nairobi, Kenya</div>
                           

                            </div>

                        </div>

                   

                



                

         

            </div>

            
    </div> );
}
 
export default Footer;
