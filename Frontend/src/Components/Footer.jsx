import React from "react";
import { SiYourtraveldottv, SiFacebook,SiLinkedin, SiInstagram } from 'react-icons/si';
import {BiLogoInstagram} from 'react-icons/bi';

const Footer = () => {
    return (
        <div className="max-w-[1240px%] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-gray-900">
            <div>
                <h1 className="w-1 text-2xl h-0"><SiYourtraveldottv color="blue"/></h1>
                <h1 className="w-full text-2xl font-bold text-pink-500 ml-6">Voyage.</h1>
                <p className="">@2023 Voyage</p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <SiFacebook size={22}/>
                    <SiInstagram size={22}/>
                    <SiLinkedin size={22}/>
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between">
                <div>
                    <h6 className="font-medium text-gray-400">Resorts</h6>
                    <ul>
                        <li className="py-2 text-sm">Cherai Beach Resort</li>
                        <li className="py-2 text-sm">Wetzlar Resorts</li>
                        <li className="py-2 text-sm">Hotel Cochin</li>
                        <li className="py-2 text-sm">Aquaria</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Food</h6>
                    <ul>
                        <li className="py-2 text-sm">Gobi Mancurian</li>
                        <li className="py-2 text-sm">Chilli Gobi</li>
                        <li className="py-2 text-sm">Garlic Chicken</li>
                        <li className="py-2 text-sm">Veg Biriyani</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Places</h6>
                    <ul>
                        <li className="py-2 text-sm">Tvm</li>
                        <li className="py-2 text-sm">Alappuzha</li>
                        <li className="py-2 text-sm">Munnar</li>
                        <li className="py-2 text-sm">Wayanad</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;