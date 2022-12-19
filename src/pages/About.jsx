import React from "react";
import {data} from "../utils/data"
import phototwo from "../assets/phototwo.jpg"

export const About = () => {
    return (
        <section className="w-full h-[100vh] relative flex flex-row items-center ">
            <img className="z-10 absolute w-[50%] h-full object-cover object-[center_-200px] shadow rounded-2xl" src={phototwo} alt="back" />
            <div className="absolute flex flex-col justify-center w-[50%] h-[100vh] right-0 bg-[rgba(0,0,0,0.95)] h-[100vh] p-4">
                <p className="italic text-[#2D3142]">{`<h1>`}</p>
                <p className="text-[4rem] font-[800] text-slate-300 capitalize text-center glowing">who am i...</p>
                <p className="italic text-[#2D3142] text-right">{`</h1>`}</p>
                <p className="italic text-[#2D3142]">{`<p>`}</p>
                <p className="text-slate-300"></p>
                <p className="w-[80%] mx-auto text-slate-400">{data.description}</p>
                <p className="italic text-[#2D3142] text-right">{`/<p>`}</p>
                <p className="italic text-[#2D3142] ">{`<div>`}</p>
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
                <p className="italic text-[#2D3142] text-right">{`</div>`}</p>
            </div>
        </section>
    )
}