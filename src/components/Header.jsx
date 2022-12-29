import {React, useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom"
import { Switch } from "./Switch";
import {AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineContacts} from "react-icons/ai"

import { DarkModeConsumer } from "../context/DarkModeContext";
export default function Header () {

    const {darkMode} = useContext(DarkModeConsumer)
    const [showNav, setShowNav] = useState(false);
    const [scrollNav , setScrollNav] = useState(false);
    

    const handleShowNav = () => {
        setShowNav(prev => !prev)
    }

    const handleHideNav = () => {
        setShowNav(false)
    }

    const handleChange = () => {
        if (window.scrollY > 400){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const handleScrollUp = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        handleChange()
        window.addEventListener("scroll", handleChange)
    }, [])

    return (
        <header className={`${scrollNav ? 'bg-[rgba(0,0,0,0.9)]' : 'bg-transparent'} fixed top-0 z-50 flex flex-row items-center w-full px-[4em] xl:px-[12em]`} >
            <Link to="/">
                <p onClick={handleScrollUp} className={`${darkMode ? 'text-purple-800 hover:text-white' : 'text-slate-400 hover:text-purple-800'} italic text-[2rem] font-[900] cursor-pointer uppercase mr-4`}>{`jq.`}</p>
            </Link>
            <Switch></Switch>
            
            <div onClick={handleShowNav} className="absolute z-20 right-12 min-[1000px]:hidden text-slate-200 text-[2em] order-3">
                {!showNav ? <AiOutlineMenu /> : <AiOutlineClose /> } 
            </div>

            <nav 
                className={`${darkMode ? 'text-white' : 'text-[#080916]'} ${showNav ? 'block absolute top-0 left-0 right-0 -bottom-[30em] bg-purple-800 transition-all delay-100' : 'absolute -top-full'} bg-transparent ml-auto min-[1000px]:static`}
            >
                <ul className={`${scrollNav && 'text-white'} ${showNav ? 'flex-col h-full' : 'flex-row'} flex justify-center items-center gap-8 text-[1.5rem] font-[500] capitalize`}>
                    <Link to="/">
                    <li onClick={handleHideNav} className="flex flex-row justify-center border-b-[2px] border-purple-900 hover:text-purple-800">
                        <AiOutlineHome className="w-[40px]"/>
                        home
                    </li>
                    </Link>
                    <Link to="/about">
                    <li onClick={handleHideNav} className="flex flex-row justify-center hover:border-b-[2px] hover:border-purple-900 ">
                        <AiOutlineUser className="w-[40px]"/>
                        about
                    </li>
                    </Link>
                    <Link to="/projects">
                    <li onClick={handleHideNav} className="flex flex-row justify-center hover:border-b-[2px] hover:border-purple-900 ">
                        <AiOutlineFundProjectionScreen className="w-[40px]"/>
                        projects
                    </li>
                    </Link>
                    <Link to="/resume">
                    <li onClick={handleHideNav} className="flex flex-row justify-center hover:border-b-[2px] hover:border-purple-900 ">
                        <AiOutlineContacts className="w-[40px]"/>
                        resume
                    </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}