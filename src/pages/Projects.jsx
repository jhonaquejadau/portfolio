import React from "react";
import { data } from "../utils/data";

export const Projects = () => {
    return (
        <section className="w-full h-[100vh] bg-[rgba(0,0,0,0.95)] text-center">
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