import React from "react";


function Detail ({name, base, height, weight, image}){

    return (
        <>
            <div className="">
                <div className="flex">
                    <h1>{name}</h1>
                    <p>{base}</p>
                </div>
                <div>
                    <img src={image} alt="" className="w-full"/>
                </div>
                <div>
                    <p>weight {weight}</p>
                    <p>height {height}</p>

                </div>

            </div>
        </>
    )
};

export default Detail;