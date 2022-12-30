import React from "react"
import { useContext } from "react"
import { DarkModeConsumer } from "../context/DarkModeContext"
import { data } from "../utils/data"

export const Footer = () => {
    
    const {darkMode} = useContext(DarkModeConsumer);

    return (
        <footer className={`${darkMode ? 'bg-[rgba(0,0,0,0.8)]' : 'bg-[rgba(0,0,0,0.1)]'} absolute w-full flex flex-row justify-center items-center z-40 py-[1em] px-[15em] max-[1000px]:px-[2em] max-[500px]:flex-col `}>
            <p className={`${darkMode ? 'text-white' : 'text-slate-400'} mr-auto max-[500px]:mr-0 max-[500px]:mb-4`}>{`<Design/>`} by <span className="text-purple-800 font-[600]">jaqudev_ 2022</span></p>
            <div className="flex flex-row justify-center items-center gap-4">
                {data.social.map((social, index) => {
                    return (
                        <div key={index} className="flex flex-row justify-center items-center gap-2 capitalize hover:scale-[1.2] z-40 mx-2">
                            <a href={social.source} target="_blank" rel="noreferrer">
                            <img className="w-[20px] h-[20px] " src={darkMode ? social.imgWhite : social.img} alt={social.name} />
                            </a>
                        </div>
                    )
                })}
            </div>
        </footer>
    )
}