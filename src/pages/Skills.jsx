import React from "react";
import { data } from "../utils/data";

export const Skills = () => {
    return (
        <section className="w-full h-[100vh] flex flex-row relative bg-[#031926] p-6">
            <div className="w-[50%] p-8 flex flex-col justify-center">
            <p className="italic text-[#2D3142]">{`<h1>`}</p>
            <p className="text-[5rem] font-bold text-[#EF8354] capitalize">my skills</p>
            <p className="italic text-[#2D3142]">{`</h1>`}</p>
            <p className="italic text-[#2D3142]">{`<p>`}</p>
            <p className="text-slate-400">{data.skillDesciption}</p>
            <p className="italic text-[#2D3142]">{`</p>`}</p>
            </div>

            <div className="w-[50%] flex flex-col justify-center items-center">
                <img className="animate-[spin_40s_linear_infinite]" src={data.mainSkill.img} alt={data.mainSkill.name} />
                <div className="flex flex-row justify-evenly items-center w-[80%]">
                {
                    data.skills.map((skill, index) => {
                        return (
                            <div key={index} className="w-[80px] h-[80px]">
                                <img className="w-[100%] h-[100%]" src={skill.img} alt={skill.name}/>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}