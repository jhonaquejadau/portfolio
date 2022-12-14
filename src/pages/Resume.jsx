import { useContext } from "react";
import { DarkModeConsumer } from "../context/DarkModeContext";

import {Experience} from "../components/resume/Experience"
import {Skills} from "../components/resume/Skills"
import {Studies} from "../components/resume/Studies"
import { Background } from "../components/background/Background";
import { DownloadButton } from "../components/resume/DownloadButton";

import { data } from "../utils/data";

export const CvDeveloper = () => {
    const {darkMode} = useContext(DarkModeConsumer)
    return (
        <section className="flex justify-center items-center w-full h-full bg-[#080916]">
            <Background/>
            <div className="flex flex-col items-center mt-[5em] w-[80%] h-full z-40 text-white max-[1000px]:w-full ">
                <p className={`${!darkMode && 'text-slate-400 border-slate-300'} text-[3rem] border-b-2 border-white`}>{`<`}My<span className="text-purple-800"> Resume</span>{` />`}</p>
                <p className={`${!darkMode && 'text-slate-400'} text-[3.5rem] capitalize font-[200] -mb-10 mt-[1em] max-[700px]:text-[2.5rem] max-[700px]:-mb-6`}>jhon alexander</p>
                <p className="text-[5rem] capitalize font-[400] text-purple-800 -mb-4 max-[700px]:text-[2.75rem] ">quejada urrutia</p>
                <p className={`${!darkMode && 'text-slate-500'} uppercase text-[2rem] text-center text-[#2D3142] font-[800] max-[700px]:text-[1.25rem] max-[700px]:my-4`}>mechatronic engineer | react js developer</p>
                <div className="flex flex-row justify-center items-center">
                    {data.social.map(social => {
                        return (
                            <div className={`${!darkMode && 'text-slate-500'} flex flex-row justify-center items-center gap-2 capitalize hover:text-purple-800 mx-2`}>
                                <img className="w-[20px] h-[20px] " src={darkMode ? social.imgWhite : social.img} alt={social.name} />
                                <a href={social.source} target="_blank" rel="noreferrer">
                                    <p>{social.name}</p>
                                </a>
                            </div>
                        )
                    })}
                </div>
                <Studies/>
                <Experience/>
                <Skills/>
                <DownloadButton/>
            </div>
        </section>
    )
}