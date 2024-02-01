import React from "react";
import { useNavigate } from "react-router-dom";




function Card ({ id, name, image, height, weight }) {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col justify-between p-5 border border-white border-solid rounded-md w-[200px] h-[360px]">
                <div>
                    <h2>{name.toUpperCase()}</h2>
                </div>
                <div className="flex justify-center w-full">
                    <img src={image} className="w-full h-full" alt="pokeImage" />
                </div>
                <div>
                    <p>id {id}</p>
                    <p>height {height}</p>
                    <p>weight {weight}</p>

                    <button className="text-sm mt-5 mb-5 bg-transparent border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200" onClick={() => navigate(`/details/${id}`)} >details</button>
                </div>


            </div>
        </>
    )

};



export default Card;