import React from "react";
import Logo from "/public/logo.png";
import Image from "next/image";
import { FiAlignRight } from "react-icons/fi";


function NavBar() {
    return (
        <div className=" bg-gray-300 mx-8 mt-6 flex rounded-lg p-1 justify-between">
            {/* Logo */}
            <div>
                <Image src={Logo} width={380} height={73} alt="Logo" />
            </div>
            {/* Menu Items */}
            <div className=" text-black flex items-center m-2">
                <a href="/" className=" p-3 hover:bg-slate-400 rounded-lg transition ">Home</a>
                <a href="/profile" className=" p-3 hover:bg-slate-400 rounded-lg transition">profile</a>
                <a href="/contact" className=" p-3 hover:bg-slate-400 rounded-lg transition">Contact</a>
                <a href="/notification" className=" p-3 hover:bg-slate-400 rounded-lg transition">
                    Notification
                </a>
            </div>
            {/* MenuBar */}
            <div className="text-black flex items-center m-2 ">
                <button
                    className=" bg-green-400 hover:bg-green-500 transition px-5 py-2 mr-4 rounded-lg"

                >Login</button>
                <FiAlignRight
                    className=" text-5xl text-red-500 cursor-pointer"

                />
            </div>
        </div>
    );
}

export default NavBar;