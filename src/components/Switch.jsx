import React, {useContext} from "react"
import { DarkModeConsumer } from "../context/DarkModeContext"

export const Switch = () => {
    const {setDarkMode} = useContext(DarkModeConsumer)
    
    const handleDarkMode = () => {
        setDarkMode(prev => !prev)
    }
    
    return (
        <label className="switch">
            <input type="checkbox" />
            <span onClick={handleDarkMode} className="slider"></span>
        </label>
    )
}