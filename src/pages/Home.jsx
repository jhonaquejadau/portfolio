import {React, useContext} from "react";
import {DarkModeConsumer} from "../context/DarkModeContext"

import {Contact} from "../components/Contact"
import { Background } from "../components/background/Background";
import logo from "../assets/logo.svg"


export const Home = () => {
    const {darkMode} = useContext(DarkModeConsumer);

    return (
        <div  className={`${darkMode ? 'bg-white' : 'bg-[#080916]'} w-full h-full `}>
            <Background />

            {/* <BackgroundAnimation/> */}
            <section className=" flex flex-row justify-center items-center w-full h-[100vh] shadow-xl bg-[rgba(0,0,0,0.3)]">
                <div className="flex flex-col justify-center text-[#2D3142] w-[60%] h-full z-20">
                    <p className="italic text-[#2D3142]">{`<section>`}</p>
                    <p className="italic text-[#2D3142]">{`<p>`}</p>
                    <h1 className={`${!darkMode ? 'text-slate-400' : 'text-[#2D3142]'} text-4xl text-left capitalize glowing max-[700px]:text-3xl`}>hi there, i'm...</h1>
                    <p className="italic text-[#2D3142] text-right">{`<p/>`}</p>
                    <p className="italic text-[#2D3142]">{`<h1>`}</p>
                    <h1 className={`${!darkMode ? 'text-slate-500' : 'text-white'} text-[4rem] font-bold text-white text-center uppercase max-[700px]:text-[50px] max-[1000px]:text-[80px]`}>jhon quejada</h1>
                    <p className="text-[40px] italic text-[#2D3142] text-center text-purple-600 font-[300]">{`<Jaqudev/>`}</p>
                    <p className="italic text-[#2D3142] text-right">{`<h1/>`}</p>
                    <p className="italic text-[#2D3142]">{`<h2>`}</p>
                    <p className={`${!darkMode ? 'text-slate-400' : 'text-[#2D3142]'} font-bold text-5xl text-center capitalize max-[700px]:text-[40px]`}><span className="glowing">mechatronic engineer</span> | <span className="glowing2">react js developer</span></p>
                    <p className="italic text-[#2D3142] text-right">{`<h2/>`}</p>
                    <p className="italic text-[#2D3142]">{`<section />`}</p>
                </div>
            </section>
            <section className="bg-[#080916] flex flex-col justify-center items-center px-[4em] min-[1400px]:flex-row ">
                <div className={`${darkMode ? 'text-white' : 'text-[#080916]'} h-full uppercase text-white text-center z-20`}>
                    <p className={`${!darkMode && 'text-slate-400' } text-[3rem] text-white text-center max-[700px]:text-[2.25rem]`}>let me <span className="text-purple-800">introduce</span> myself</p>
                    <p className="text-xl font-[300] max-[700px]:text-lg">I'm mechatronic engineer, but I completely fell in love with programming...</p>
                    <p className="text-xl font-[300] max-[700px]:text-lg">Enjoying make code in languages like <span className="text-purple-800 font-[600]">JavaScript</span> and little of <span className="text-purple-800 font-[600]">Python</span> </p>
                    <p className="text-xl font-[300] max-[700px]:text-lg">Right now, I'm looking for my first job as a <span className="text-purple-800 font-[600]">React Js Developer ...</span></p>
                    <p className=" w-[80%] mx-auto text-purple-800 font-[600] text-2xl mt-[2em] xl:text-3xl">If you feel awesome with my profile, just connect with me</p>
                </div>
                <img className="animate-[spin_50s_ease_infinite] w-[300px] xl:w-[500px] h-full" src={logo} alt={logo} />
            </section>
            <section>
                <Contact />
            </section>
        </div>
    )
}