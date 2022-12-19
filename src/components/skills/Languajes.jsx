import React from "react";
import { data } from "../../utils/data";

export const Languages = () => {

    return (
        <div className="flex flex-col justify-center items-center w-[40%] p-4 shadow">
            <img className="animate-[spin_40s_linear_infinite] drop-shadow-xl" src={data.mainSkill.img} alt={data.mainSkill.name} />
            <div className="flex flex-row justify-evenly items-center">

                {data.skills.map((skill, index) => {
                    return ( 
                        <div key={index} className="relative w-[100px] h-[100px] mx-4 flex justify-center items-center hover:scale-[1.1]">
                            <img src={skill.img} alt={skill.name} />
                        </div> 
                    )
                })}
            </div>
        </div>
    )
}