import React from "react";
import { DarkModeConsumer } from "../context/DarkModeContext";

import phototwo from "../assets/phototwo.jpg"
import {data} from "../utils/data"
import { Background } from "../components/background/Background";
import { useContext } from "react";

export const About = () => {
    const {darkMode} = useContext(DarkModeConsumer);
    return (
        <section className="flex flex-col items-center w-full h-full bg-[#080916]"> 
            <Background />
            <div className="flex flex-col items-center w-full h-full xl:flex-row">
                <div className="hidden xl:w-[50%] xl:block xl:h-[900px] z-40">
                    <img className="w-full h-full object-cover rounded-full rounded-tl-[1em]" src={phototwo} alt="back" />
                </div>
                <div className="flex flex-col justify-center xl:p-4 xl:w-[50%] xl:h-[900px] z-40">
                    <div className="w-full h-[500px] max-[400px]:h-[200px] xl:hidden rounded-br-[5em]">
                        <img className="w-full h-full object-cover object-[center_-400px] rounded-br-[5em] max-[400px]:rounded-br-[2em] max-[400px]:rounded-tl-[2em] max-[700px]:object-[center_-200px]" src={phototwo} alt="back" />
                    </div>
                    <p className="italic text-[#2D3142] italic">{`<h1>`}</p>
                    <p className={`text-slate-500 text-[3rem] capitalize text-center glowing max-[400px]:text-[2.75rem]`}>{`<who am i.../>`}</p>
                    <p className="italic text-[#2D3142] text-right italic">{`</h1>`}</p>
                    <p className="italic text-[#2D3142] italic">{`<p>`}</p>
                    <p className="text-slate-300"></p>
                    <p className="w-[80%] mx-auto text-2xl text-slate-400">{data.description}</p>
                    <p className="italic text-[#2D3142] text-right italic">{`/<p>`}</p>
                    <p className="italic text-[#2D3142] italic">{`<div>`}</p>
                    {
                        data.profession.map((profession, index) => {
                            return (
                                <div key={index} className="z-40 shadow-md w-[60%] mx-auto p-2 mb-4 border-2 profession">
                                    <p className={`${darkMode ? 'text-slate-200' : 'text-purple-800'} text-2xl font-bold text-center capitalize`}>{profession.name}</p>
                                    <p className="capitalize text-slate-400 font-bold italic">{profession.school}</p>
                                    <p className="capitalize text-slate-500 font-bold italic">{profession.date}</p>
                                </div>
                            )
                        })
                    }
                    <p className="italic text-[#2D3142] text-right italic">{`</div>`}</p>
                </div>

            </div>
            <div className="w-full h-full text-white text-[3rem] z-40">
                <p className={`${darkMode ? 'text-white' : 'text-purple-800'} capitalize text-center max-[700px]:text-[2.5rem]`}>{`<professional skills/>`}</p>
                <div className="grid grid-cols-5 gap-10 w-full h-full px-[2em] max-[1000px]:grid-cols-4 max-[700px]:grid-cols-2 max-[400px]:grid-cols-1">
                    {data.skills.map((data, index) => {
                        return (
                            <div key={index} className="flex justify-center items-center rounded-xl border-2 border-purple-800 p-4 z-50 hover:scale-[1.02]">
                                <img className="w-[70px] h-[70px]" src={darkMode ? data.imgWhite : data.img} alt={data.name} />
                            </div>
                        )
                    })}
                </div>
                <p className={`${darkMode ? 'text-white' : 'text-slate-400'} text-center mt-4 font-[300] max-[700px]:text-[2.5rem] max-[700px]:w-[80%] max-[700px]:mx-auto`}><span className="text-purple-800 font-[500]">{`const`} </span>tools {`= {used: [windows, vscode, figma]}`}</p>
                <div className="grid grid-cols-3 gap-10 w-full h-full px-[2em] mb-[2em] max-[700px]:grid-cols-1">
                    {data.tools.map((data, index) => {
                        return (
                            <div key={index} className="flex justify-center items-center rounded-xl border-2 border-purple-800 p-4 z-50 hover:scale-[1.02]">
                                <img className="w-[60px] h-[60px]" src={darkMode ? data.imgWhite : data.img} alt={data.name} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}