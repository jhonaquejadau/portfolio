import { useContext } from "react";
import { DarkModeConsumer } from "../../context/DarkModeContext";


export const DownloadButton = () => {
  const { darkMode } = useContext(DarkModeConsumer);
  return (
    <a href="CV_JHON_QUEJADA_REACT_JS_DEVELOPER.pdf" download="CV_JHON_QUEJADA_REACT_JS_DEVELOPER.pdf">
      <button className={`${!darkMode && 'bg-slate-300'} btnCV my-8 bg-[rgba(0,0,0,0.5)]`}>
        <span className={`${!darkMode && 'bg-slate-500'} bg-[rgba(0,0,0,0.9)]`}>
            Download CV
        </span>
      </button>
    </a> 
  );
};
