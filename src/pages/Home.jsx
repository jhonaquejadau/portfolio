import React from "react";

import {Contact} from "../components/Contact"
import { Background } from "../components/background/Background";
import logo from "../assets/logo.svg"


export const Home = () => {
    return (
        <div  className="w-full h-full bg-[#080916]">
            <Background />

            {/* <BackgroundAnimation/> */}
            <section className=" flex flex-row justify-center items-center w-full h-[100vh] shadow-xl bg-[rgba(0,0,0,0.3)]">
                <div className="flex flex-col justify-center text-[#2D3142] w-[60%] h-full z-20">
                    <p className="italic text-[#2D3142]">{`<section>`}</p>
                    <p className="italic text-[#2D3142]">{`<p>`}</p>
                    <h1 className="text-4xl text-left capitalize glowing max-[700px]:text-3xl">hi there, i'm...</h1>
                    <p className="italic text-[#2D3142] text-right">{`<p/>`}</p>
                    <p className="italic text-[#2D3142]">{`<h1>`}</p>
                    <h1 className="text-[6rem] font-bold text-white text-center uppercase max-[400px]:text-[70px] max-[1000px]:text-[80px]">jhon quejada</h1>
                    <p className="text-[40px] italic text-[#2D3142] text-center text-orange-600 font-[300]">{`<Jaqudev/>`}</p>
                    <p className="italic text-[#2D3142] text-right">{`<h1/>`}</p>
                    <p className="italic text-[#2D3142]">{`<h2>`}</p>
                    <p className="font-bold text-5xl text-center capitalize max-[400px]:text-3xl"><span className="glowing">mechatronic engineer</span> | <span className="glowing2">react developer</span></p>
                    <p className="italic text-[#2D3142] text-right">{`<h2/>`}</p>
                    <p className="italic text-[#2D3142]">{`<section />`}</p>
                </div>
            </section>
            <section className="bg-[#080916] flex flex-col justify-center items-center xl:flex-row">
                <div className="h-full uppercase text-white text-center">
                    <p className="text-[4rem] text-white text-center">let me <span className="text-purple-800">introduce</span> myself</p>
                    <p className="text-xl font-[300]">I'm mechatronic engineer, but I completely fell in love with programming...</p>
                    <p className="text-xl font-[300]">Enjoying make code in languages like <span className="text-purple-800 font-[600]">JavaScript</span> and little of <span className="text-purple-800 font-[600]">Python</span> </p>
                    <p className="text-xl font-[300]">Right now, I'm looking for my first job as a <span className="text-purple-800 font-[600]">React Js Developer ...</span></p>
                    <p className="mt-[4em] xl:text-[2rem] w-[80%] mx-auto text-purple-800 font-[600] xl:mb-0">If you feel awesome with my profile, just connect with me</p>
                </div>
                <img className="animate-[spin_80s_ease] w-[700px] h-full" src={logo} alt={logo} />
            </section>
            <section>
                <Contact />
            </section>
        </div>
    )
}