import { useContext } from "react";
import { DarkModeConsumer } from "../../context/DarkModeContext";

export const Studies = () => {
    const {darkMode} = useContext(DarkModeConsumer)
    return (
        <div className={`${!darkMode && 'text-slate-500'} text-center text-[1rem] mt-8 w-[80%] h-full`}>
            <p className={`text-[1.75rem] capitalize border-b-2 w-full`}>{`<studies & licenses />`}</p>
            <div className="w-full">
                <p className={`font-[700] uppercase text-left mt-4`}>the frontend developer career path</p>
                <p className={`text-slate-600 text-lg text-justify italic`}>Online, Scrimba - June 2022 to November 2022</p>
            </div>
            <div className="w-full">
                <p className={`font-[700] uppercase text-left mt-4`}>Specialist in Artificial Intelligence | Universidad Autónoma de Occidente</p>
                <p className={`text-slate-600 text-lg text-justify italic`}>Cali, Colombia - August 2021 to June 2022 (Waiting Degree)</p>
            </div>
            <div className="w-full">
                <p className={`font-[700] uppercase text-left mt-4`}>Mechatronic Engineering | Universidad Autónoma de Occidente</p>
                <p className={`text-slate-600 text-lg text-justify italic`}>Cali, Colombia - June 2016 to May 2022</p>
            </div>
            <div className="w-full">
                <p className={`font-[700] uppercase text-left mt-4`}>Academic bachelor's degree, specializing in systems | School Parroquial Nuestra Señora del Rosario and SENA</p>
                <p className={`text-slate-600 text-lg text-justify italic`}>Jamundí, Colombia - Graduated at June 2016</p>
            </div>
        </div>
    )
}