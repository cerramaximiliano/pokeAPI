import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Home () {

    const navigate = useNavigate();
    const logo = '/assets/pokeapi_logo.png';
    const fooTalentLogo = '../public/assets/footalent_logo.jpeg';

    return (
        <>

        <div className="flex flex-col justify-center">
        <div>
                <div className="flex justify-center">
                    <img className="" src={logo} alt="pokeAPI" />
                </div>
                <div className="card">
                <button className="bg-transparent border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200" onClick={() => navigate('/poke') }>
                    Home
                </button>
                </div>
            </div>
            <Footer></Footer>


        </div>

        </>
    )
};


export default Home;