import React from "react";
import { data } from "../utils/data";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Background } from "../components/background/Background";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export const Projects = () => {
    return (
        <section className="flex flex-col items-center w-full h-full bg-[#080916] border-2 ">
            <Background />
            <div className=" w-full h-full text-slate-400 p-[2em] z-40">
                <p className="text-[#2D3142] italic mt-[2em]">{`<p>`}</p>
                <p className={`text-[3rem] font-bold capitalize text-center max-[400px]:text-[3rem]`}>{`<projects/>`}</p>
                <p className="text-[1.75rem] text-center w-[80%] mx-auto font-[500] text-purple-800 italic">My most recents works</p>
                <p className="text-[1.75rem] text-slate-600 text-center w-[80%] mx-auto font-[200]">My most recents works. I'm trying to build projects as much as I can, so dont hesitate to leave a  like on my <span className="font-[600] text-purple-800">Github</span> repository</p>
                <p className="text-[#2D3142] italic text-right">{`</p>`}</p>
                <div className="w-full h-full justify-center items-center">
                    <Swiper
                        // slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={10}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        breakpoints={{
                            
                            1200: {
                                slidesPerView:3,
                                slidesPerGroup:3
                            }
                        }}
                    >
                        {
                            data.projects.map((project,index) => {
                                return (
                                    <SwiperSlide>

                                        <div key={index} className="w-full h-full mb-[2em] p-6">
                                            <p className="text-[#2D3142]">{`<div>`}</p>
                                            <div key={index} 
                                                className="w-full h-full text-xl rounded-xl text-center border-2 border-purple-800 hover:scale-[1.02]"
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