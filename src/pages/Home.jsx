import React from "react";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Home = () => {
    return (
        <div>

            <section className=" flex flex-row justify-center items-center bg-[#031926] w-full h-[100vh]">
                <p className=" left-0 text-[50px] italic text-[#2D3142] rotate-90 font-[300] hover:text-orange-500">{`<Jaqudev />`}</p>
                <div className=" p-6 text-[#2D3142]">
                    <p className="italic text-[#2D3142]">{`<section>`}</p>
                    <p className="italic text-[#2D3142]">{`<p>`}</p>
                    <h1 className="text-4xl text-left capitalize">hi this is</h1>
                    <p className="italic text-[#2D3142] text-right">{`<p/>`}</p>
                    <p className="italic text-[#2D3142]">{`<h1>`}</p>
                    <h1 className="name my-8 uppercase max-[1000px]:text-[80px]">jhon quejada</h1>
                    <p className="italic text-[#2D3142] text-right">{`<h1/>`}</p>
                    <p className="italic text-[#2D3142]">{`<h2>`}</p>
                    <p className="font-bold text-5xl capitalize">mechatronic engineer | react developer</p>
                    <p className="italic text-[#2D3142] text-right">{`<h2/>`}</p>
                    <p className="italic text-[#2D3142]">{`<section />`}</p>
                    <div className="mt-4">
                        <button className="px-[5em] py-4 border-2 border-[#EF8354] text-slate-200 capitalize font-[500] hover:bg-[#EF8354] mr-4">contact me</button>
                        <button className="px-[5em] py-4 border-2 border-[#EF8354] text-slate-200 capitalize font-[500] hover:bg-[#EF8354]">read cV</button>
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