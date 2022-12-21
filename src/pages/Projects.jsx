import React from "react";
import { data } from "../utils/data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";


export const Projects = () => {
    return (
        <section className="w-full h-full bg-[rgba(0,0,0,0.95)]">
            <div className=" w-full h-full text-slate-300 p-[2em]">
                <p className="text-[#2D3142] italic">{`<p>`}</p>
                <p className="text-[4rem] font-bold capitalize">projects</p>
                <p className="text-[#2D3142] italic">{`</p>`}</p>
                <div className="w-full h-full justify-center items-center border-2">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                    >
                        {
                            data.projects.map((project,index) => {
                                return (
                                    <SwiperSlide>

                                        <div className="w-[500px] h-full mb-[2em]">
                                            <p className="text-[#2D3142]">{`<div>`}</p>
                                            <div key={index} 
                                                className="w-full h-full text-xl rounded-xl text-center  bg-[rgba(255,255,255,0.05)] hover:scale-[1.02]"
                                            >
                                                <a href={project.source} target="_blank" rel="noreferrer">
                                                    <img className="w-[full] rounded-tr-xl rounded-tl-xl" src={project.img} alt={project.name} />
                                                </a>
                                                <div className="p-4">
                                                    <p className="font-bold capitalize">{project.name}</p>
                                                    <p className="text-lg text-slate-500">{project.description}</p>
                                                    <p className="text-lg font-bold mt-4">Source Project</p>
                                                    <p className="text-lg text-slate-500 hover:font-bold hover:text-orange-500"><a href={project.source} target="_blank" rel="noreferrer">{project.source}</a></p>
                                                    <p className="text-lg mt-2 font-bold">{project.api.name}</p>
                                                    <p className="text-lg text-slate-500 hover:font-bold hover:text-orange-500">{project.api.url}</p>
                                                </div>
                            
                                            </div>
                                            <p className="text-[#2D3142] text-right">{`</div>`}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}