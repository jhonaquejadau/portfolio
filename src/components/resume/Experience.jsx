import { useContext } from "react";
import { DarkModeConsumer } from "../../context/DarkModeContext";

export const Experience = () => {
    const {darkMode} = useContext(DarkModeConsumer)
    return (
        <div className="text-center text-[1rem] mt-8 w-[80%] h-full">
            <p className={`${!darkMode && 'text-slate-500 mt-4'} text-[1.75rem] capitalize border-b-2 w-full`}>{`<experience />`}</p>
            <div className={`${!darkMode && 'text-slate-500'} w-full h-full mt-4`}>
                <p className={`font-[700] uppercase text-left`}>Remote Assistance Specialist | Avidbots Corp.</p>
                <p className={`capitalize text-lg text-slate-400 text-left -mb-2`}>Kitchener in Ontario, Canada | Headquarters in Cali Valle del Cauca, Colombia</p>
                <p className={`capitalize text-lg text-slate-600 text-left`}>march 2022 to present</p>
                <ul className={`${!darkMode && 'text-slate-700'} text-justify font-[300] mt-2 px-[2em]`}>
                    <li>1. Control and assistance of autonomous cleaning robots located in different market areas, such as shopping malls, stores, factories, and airports around the
                            world. Attending to customers’s needs to ensure the proper operation of the robots.</li>
                    <li>2. Analyze, monitor, and document metrics, failures, and issues affecting robot performance to improve robot autonomy. </li>
                    <li>3. Attending to and solving doubts of the customer about technical failures related to internal parts of the robot that may be affected during the operation process. Providing an efficient solution that allows the robot to continue with its cleaning tasks.</li>
                </ul>
            </div>
            <div className={`${!darkMode && 'text-slate-500'} w-full h-full mt-4`}>
                <p className={`font-[700] uppercase text-left`}>Fixed Assets Counting Assistant| Datainventarios - Unilever</p>
                <p className={`capitalize text-lg text-slate-400 text-left -mb-2`}>Cali Valle del Cauca, Colombia</p>
                <p className={`capitalize text-lg text-slate-600 text-left`}>September 2022 to November 2022</p>
                <ul className={`${!darkMode && 'text-slate-700'} text-justify font-[300] mt-2 px-[2em]`}>
                    <li>1. Inventory of fixed assets in Unilever's food plant, based in Cali, Colombia. Fulfilling protocols as a counting assistant, with directed accompaniment in production, administration, and technology sectors.</li>
                </ul>
            </div>
        </div>
    )
}