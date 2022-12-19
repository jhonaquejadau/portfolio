import React from "react";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import BackgroundAnimation from "../components/BackgroundAnimation";

export const Home = () => {
    return (
        <div>
            <BackgroundAnimation/>
            <section className="relative flex flex-row justify-center items-center bg-[rgba(0,0,0,0.95)] w-full h-[100vh]">
                <p className="z-20 left-0 text-[50px] italic text-[#2D3142] rotate-90 font-[300] glowing">{`<Jaqudev />`}</p>
                <div className="z-20 p-6 text-[#2D3142]">
                    <p className="italic text-[#2D3142]">{`<section>`}</p>
                    <p className="italic text-[#2D3142]">{`<p>`}</p>
                    <h1 className="text-4xl text-left capitalize glowing">hi this is</h1>
                    <p className="italic text-[#2D3142] text-right">{`<p/>`}</p>
                    <p className="italic text-[#2D3142]">{`<h1>`}</p>
                    <h1 className="name my-8 uppercase max-[1000px]:text-[80px]">jhon quejada</h1>
                    <p className="italic text-[#2D3142] text-right">{`<h1/>`}</p>
                    <p className="italic text-[#2D3142]">{`<h2>`}</p>
                    <p className="font-bold text-5xl capitalize"><span className="glowing">mechatronic engineer</span> | <span className="glowing2">react developer</span></p>
                    <p className="italic text-[#2D3142] text-right">{`<h2/>`}</p>
                    <p className="italic text-[#2D3142]">{`<section />`}</p>
                    <div className="mt-4 flex justify-center items-center">
                        <button className="btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>Contact Me</span>
                        </button>
                        <button className="btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>Read Cv</span>
                        </button>
                    </div>
                </div>
            </section>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    )
}