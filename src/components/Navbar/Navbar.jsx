import React from "react";
import { Link } from "react-router-dom";


export default function Navbar () {
    const logo = '../src/assets/pokeapi_logo.png';

    return (
        <>
            <div className="flex flex-row justify-between w-full items-center mb-[15px]">
                    <div className="flex gap-5">
                        <div className="">
                            <Link to="/poke">Home</Link>
                        </div>
                        <div className="">
                            <Link to="/">Logout</Link>
                        </div>
                    </div>

                    <div>
                        <img className="h-[50px]" src={logo} alt="" />
                    </div>
            </div>
        </>
    )

};