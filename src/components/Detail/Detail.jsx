import React from "react";


function Detail ({name, base, height, weight, image}){

    return (
        <>
            <div className="flex flex-col justify-center items-center max-w-[800px] min-w-full m-auto">
                <div className="flex w-1/2 justify-center">
                    <h1>{name}</h1>
                    <p className="ml-5">{base}</p>
                </div>
                <div className="w-1/2">
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