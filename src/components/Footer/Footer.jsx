import React from "react";


export default function Footer (){
    const github = '/assets/github-mark-white.png'

    const handleClick = () => {
        window.open("https://github.com/cerramaximiliano/pokeAPI", "_blank")
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <p className="text-white">Hecho con ❤️ para Foo Talent Group</p>
                <img className="w-8 cursor-pointer ml-5" src={github} alt="" onClick={ handleClick }/>
            </div>
        </>
    )
};
