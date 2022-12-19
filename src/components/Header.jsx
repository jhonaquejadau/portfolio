import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Link } from "react-router-dom"
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"

export default function Header () {

    const [showNav, setShowNav] = useState(false);
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

    useEffect(() => {
        handleChange()
        window.addEventListener("scroll", handleChange)
    }, [])

    return (
        <header className={`${hover ? 'bg-[rgba(0,0,0,0.7)]' : 'bg-transparent'} ${showNav ? 'bg-[#4F5D75] inset-0 flex justify-center items-center' : 'bg-transparent'} transition-all ease-in delay-[1000] fixed top-0 z-10 w-full m-0 py-2 z-20`} >
            <div onClick={handleShowNav} className="absolute right-5 top-5  min-[1000px]:hidden text-slate-200 text-2xl ">
                {!showNav ? <AiOutlineMenu /> : <AiOutlineClose /> } 
            </div>
        
            <div className="z-50 flex justify-center items-center ">
                <p className="text-[1.75rem] italic text-slate-200 font-[100] capitalize font-bold glowing ">{`() => {jaqudev_}`}</p>
            </div>

            <nav className={`${showNav ? 'block' : 'hidden'} min-[1000px]:block w-fit h-[50vh] p-2 bg-[rgba(0,0,0,0.5)] ml-6`}>
                <ul className="w-full h-full flex flex-col justify-evenly items-center">
                    <Link to="/">
                    <li onClick={handleHiddeNav} className={`${showNav ? 'text-3xl my-4' : ''} hover:border-b hover:border-orange-500 font-[400]  text-slate-200`}>{`<Home/>`}</li>
                    </Link>

                    <Link to="/about">
                    <li onClick={handleHiddeNav} className={`${showNav ? 'text-3xl my-4' : ''} hover:border-b hover:border-orange-500 font-[400]  text-slate-200`}>About</li>
                    
                    </Link>
                    <Link to="/skills">
                    <li onClick={handleHiddeNav} className={`${showNav ? 'text-3xl my-4' : ''} hover:border-b hover:border-orange-500 font-[400]  text-slate-200`}>Skills</li>
                    
                    </Link>
                    <Link to="projects">
                    <li onClick={handleHiddeNav} className={`${showNav ? 'text-3xl my-4' : ''} hover:border-b hover:border-orange-500 font-[400]  text-slate-200`}>Projects</li>
                    
                    </Link>
                    <Link to="contact">
                    <li onClick={handleHiddeNav} className={`${showNav ? 'text-3xl my-4' : ''} hover:border-b hover:border-orange-500 font-[400]  text-slate-200`}>Contact</li>
                    
                    </Link>
                </ul>
            </nav>
        </header>
    )
}