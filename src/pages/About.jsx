import React from "react";
import {data} from "../utils/data"
import phototwo from "../assets/phototwo.jpg"

export const About = () => {
    return (
        <section className="w-full h-full items-center xl:flex xl:flex-row">
            <div className="hidden xl:w-[50%] xl:block xl:h-[900px] bg-[rgba(0,0,0,0.95)]">
                <img className="z-10 w-full h-full object-cover rounded-br-[5em] rounded-tl-[5em]" src={phototwo} alt="back" />
            </div>
            <div className="flex flex-col justify-center bg-[rgba(0,0,0,0.95)] xl:p-4 xl:w-[50%] xl:h-[900px]">
                <div className="w-full h-[500px] max-[400px]:h-[200px] xl:hidden rounded-br-[5em]">
                    <img className="w-full h-full object-cover object-[center_-400px] rounded-br-[5em] max-[400px]:rounded-br-[2em] max-[400px]:rounded-tl-[2em] max-[700px]:object-[center_-200px]" src={phototwo} alt="back" />
                </div>
                <p className="italic text-[#2D3142] italic">{`<h1>`}</p>
                <p className="text-[4rem] font-[800] text-slate-300 capitalize text-center glowing max-[400px]:text-[2.75rem]">who am i...</p>
                <p className="italic text-[#2D3142] text-right italic">{`</h1>`}</p>
                <p className="italic text-[#2D3142] italic">{`<p>`}</p>
                <p className="text-slate-300"></p>
                <p className="w-[80%] mx-auto text-slate-400">{data.description}</p>
                <p className="italic text-[#2D3142] text-right italic">{`/<p>`}</p>
                <p className="italic text-[#2D3142] italic">{`<div>`}</p>
                {
                    data.profession.map((profession, index) => {
                        return (
                            <div key={index} className="z-50 shadow-md w-[60%] mx-auto p-2 mb-4 border-2 profession">
                                <p className="text-2xl text-slate-200 font-bold text-center capitalize">{profession.name}</p>
                                <p className="capitalize text-slate-400 font-bold italic">{profession.school}</p>
                                <p className="capitalize text-slate-500 font-bold italic">{profession.date}</p>
                            </div>
                        )
                    })
                }
                <p className="italic text-[#2D3142] text-right italic">{`</div>`}</p>
            </div>
        </section>
    )
}