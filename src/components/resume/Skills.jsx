import { useContext } from "react";
import { DarkModeConsumer } from "../../context/DarkModeContext";

export const Skills = () => {
    const {darkMode} = useContext(DarkModeConsumer)
    const skills = ['Html','Css','Tailwind','Figma','JavaScript','Python','React Js','Node Js','Express','Mongo DB','Firebase','Context API','Redux','Redux Toolkit','Linux Ubuntu','Windows','SolidWorks'];
    return (
        <div className={`${!darkMode && 'text-slate-500'} text-center text-[1rem] mt-8 w-[80%] h-full`}>
            <p className={`text-[1.75rem] capitalize border-b-2 w-full`}>{`<skills />`}</p>

            <div className="grid grid-cols-3 gap-2 w-full h-full mt-4 sm:grid-cols-4 lg:grid-cols-6">
                {skills.map((skill, index) => (
                    <div key={index} className="border-2 bg-transparent rounded-sm p-2 hover:scale-[1.02]">
                        <p className={`${darkMode && 'hover:text-purple-800'} hover:text-slate-500`}>{skill}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}