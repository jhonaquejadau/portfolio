import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"

export default function Header () {

    const [showNav, setShowNav] = useState(false);
    const [showMenu, setShowMenu] = useState(false); 
    const [hover , setHover] = useState(false);

    const handleShowNav = () => {
        setShowNav(prev => !prev)
    }

    const handleHiddeNav = () => {
        setShowNav(false)
    }

    const handleChange = () => {
        if (window.scrollY > 800){
            setHover(true)
        } else {
            setHover(false)
        }
    }

    const handleShowMenu = () => {
        setShowMenu(true)
    }

    const handleHideMenu = () => {
        setShowMenu(false)
    }

    const handleScrollUp = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        handleChange()
        window.addEventListener("scroll", handleChange)
    }, [])

    return (
        <header className={`${hover ? 'bg-[rgba(0,0,0,0.7)]' : 'bg-transparent'} ${showNav ? 'bg-[#4F5D75] inset-0 flex justify-center items-center' : 'bg-transparent'} m-0`} >
            <div onClick={handleShowNav} className="absolute right-5 top-5  min-[1000px]:hidden text-slate-200 text-2xl ">
                {!showNav ? <AiOutlineMenu /> : <AiOutlineClose /> } 
            </div>
        
            <div className="z-50 fixed flex justify-center items-center w-full">
                <p onClick={handleScrollUp} className="text-[1.75rem] italic text-slate-200 font-[100] capitalize font-bold cursor-pointer glowing ">{`() => {jaqudev_}`}</p>
            </div>

            <nav 
                onMouseOver={handleShowMenu} 
                onMouseOut={handleHideMenu} 
                className={` ${!showMenu ? 'h-[30vh] ' : 'h-[50vh]'} transition-all z-50 fixed top-1/4 w-fit bg-[rgba(0,0,0,0.5)] ml-2 min-[1000px]:block`}
            >
                {!showMenu ?
                <div className="h-full flex justify-center items-center">
                    <p className="capitalize text-[1.5rem] text-slate-300 rotate-[270deg] glowing">menu</p> 
                </div> 
                :             
                    <ul className="w-full h-full flex flex-col justify-evenly items-center">
                            <a href="#home">
                                <li onClick={handleHiddeNav} className={`${showNav ? 'text-3xl my-4' : ''} hover:border-b hover:border-orange-500 font-[400]  text-slate-200`}>{`<Home/>`}</li>
                            </a>

                            <a href="#about">
                                <li onClick={handleHiddeNav} className={`${showNav ? 'text-3xl my-4' : ''} hover:border-b hover:border-orange-500 font-[400]  text-slate-200`}>About</li>
                            </a>
                        
                            <a href="#skills">
                                <li onClick={handleHiddeNav} className={`${showNav ? 'text-3xl my-4' : ''} hover:border-b hover:border-orange-500 font-[400]  text-slate-200`}>Skills</li>
                            </a>
                            <a href="#projects">
                                <li onClick={handleHiddeNav} className={`${showNav ? 'text-3xl my-4' : ''} hover:border-b hover:border-orange-500 font-[400]  text-slate-200`}>Projects</li>
                            </a>
                            <a href="#contact">
                                <li onClick={handleHiddeNav} className={`${showNav ? 'text-3xl my-4' : ''} hover:border-b hover:border-orange-500 font-[400]  text-slate-200`}>Contact</li>
                            </a>
                        
                    </ul>}
            </nav>
        </header>
    )
}