import React from "react";
import { data } from "../utils/data";

export const Projects = () => {
    return (
        <section className="w-full h-[100vh] bg-[#031926] text-center">
            {/* <div className="w-fit mx-auto h-[20%] border-2 mb-2">
            <p className="italic text-[#2D3142] text-left">{`<h1>`}</p>
            <p className="text-[6rem]">projects</p>
            <p className="italic text-[#2D3142]">{`</h1>`}</p>
            </div> */}
            <div className="absolute w-full h-[80%] grid grid-cols-2">
                {
                    data.projects.map((project,index) => {
                        return (
                            <div key={index}>
                                <a href={project.source} target="_blank" rel="noreferrer">
                                    <img className="hover:opacity-50" src={project.img} alt={project.name} />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}