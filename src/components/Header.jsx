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
        <header className={`${hover ? 'bg-[rgba(0,0,0,0.7)]' : 'bg-transparent'} ${showNav ? 'bg-[#4F5D75] inset-0 flex justify-center items-center' : 'bg-transparent'} transition-all ease-in delay-[1000] fixed top-0 z-10 w-full m-0 py-2 max-[1000px]:`} >
            <div onClick={handleShowNav} className="absolute right-5 top-5  min-[1000px]:hidden text-slate-200 text-2xl ">
                {!showNav ? <AiOutlineMenu /> : <AiOutlineClose /> } 
            </div>
            <div className={`${showNav ? 'flex flex-col justify-center border-2 h-[50%]' : ''} flex flex-row items-center w-[90%] mx-auto bg-transparent`}>
                <div className="mx-auto min-[1000px]:mr-auto min-[1000px]:mx-0">
                    <p className="text-[1.75rem] italic text-slate-200 font-[100] capitalize">{`() => {jaqudev_}`}</p>
                </div>
                <nav className={`${showNav ? 'block' : 'hidden'} w-[50%] min-[1000px]:block`}>
                    <ul className={`${showNav ? 'flex flex-col' : 'flex flex-row'}  justify-evenly items-center`}>
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
            </div>
        </header>
    )
}