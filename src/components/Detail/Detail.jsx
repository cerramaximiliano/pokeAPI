import React from "react";


function Detail ({name, base, height, weight, image, abilities}){
    console.log(abilities)
    return (
        <>
            <div className="flex flex-col justify-center items-center max-w-[800px] min-w-full m-auto mb-5">
                <div className="flex w-1/2 justify-center">
                    <h1>{name}</h1>
                    <p className="ml-5">{base}</p>
                </div>
                <div className="w-1/2">
                    <img src={image} alt="" className="w-full"/>
                </div>
                <div>
                    <p className="text-blue-600">weight</p>
                    <p>{weight}</p>
                    <p className="text-blue-600">height</p>
                    <p>{height}</p>

                    {
                        abilities.length > 0 &&
                        
                        abilities.map((ability, i) => {
                            if( i === 0){
                                return <div>
                                        <p className="text-blue-600">abilities </p> <p key={i}>{ability.ability.name}</p>
                                        </div>
                                    
                            }else {
                                return <p key={i}>{ability.ability.name}</p>
                            }
                            
                        })
                    }
                </div>

            </div>

        </>
    )
};

export default Detail;