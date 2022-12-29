import {React, useState, useRef } from "react";
import {data} from "../utils/data"
import {DarkModeConsumer} from "../context/DarkModeContext"

import emailjs from '@emailjs/browser';
import { useContext } from "react";

export const Contact = () => {

    const {darkMode} = useContext(DarkModeConsumer)
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        subject: "",
        message: ""
    })

    const handleFormData = (event) => {
        const {name, value} = event.target;
        setFormData(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5gu6vg2', 'template_5gwfjo9', form.current, 'cimJ6plMeq-bcqSFo')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setFormData({
            name:"",
            email:"",
            subject: "",
            message: ""
        })
    };

    return (
        <section id="contact" className=" w-full h-full flex  flex-col justify-center items-center xl:p-[5em] xl:flex-row">
            <div className="w-full flex justify-center order-2 z-40 mb-[4em] xl:w-[60%] xl:mb-0">
                <form ref={form} className="w-[80%] mx-auto" onSubmit={sendEmail}>
                    <label className="text-slate-400 capitalize font-bold">
                        name
                        <input
                            required
                            className="w-full bg-[rgba(0,0,0,0.3)] text-white p-2" 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleFormData} />
                    </label>
                    <label className="text-slate-400 capitalize font-bold my-2">
                        email
                        <input
                            required 
                            className="w-full bg-[rgba(0,0,0,0.3)] text-white p-2" 
                            type="text" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleFormData}/>
                    </label>
                    <label className="text-slate-400 capitalize font-bold my-2">
                        subject
                        <input
                            required 
                            className="w-full bg-[rgba(0,0,0,0.3)] text-white p-2" 
                            type="text" 
                            name="subject" 
                            value={formData.subject} 
                            onChange={handleFormData}/>
                    </label>
                    <label className="text-slate-400 capitalize font-bold">
                        textarea
                        <textarea 
                            required
                            className="w-full h-[200px] bg-[rgba(0,0,0,0.3)] text-white p-2" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleFormData}/>
                    </label>
                    <button 
                        className="w-full py-2 rounded border-2 text-slate-400 capitalize hover:bg-slate-200 hover:text-[#031926] font-bold "
                        type="submit"    
                    >
                        contact me
                    </button>
                </form>
            </div>
            <div className="w-full flex flex-col justify-center order-1 xl:w-[50%] z-40">
                <p className="text-[#2D3142] italic">{`<p>`}</p>
                <p className={`${!darkMode && 'text-purple-800'} text-slate-300 font-bold text-[3rem] capitalize text-center glowing`}>{`<contact/>`}</p>
                <p className="text-[#2D3142] text-right italic">{`</p>`}</p>
                <p className="text-[#2D3142] italic">{`<p>`}</p>
                <p className="text-2xl text-slate-400 font-bold text-center">Did you like my profile?</p>
                <p className="text-[#2D3142] text-right italic">{`</p>`}</p>
                <p className="text-[#2D3142] italic">{`<p>`}</p>
                <p className="text-slate-500 text-3xl text-center px-[2em] max-[400px]:text-lg ">{data.interest}</p>
                <p className="text-[#2D3142] text-right italic">{`</p>`}</p>
                <div className="flex flex-row justify-center items-center w-full z-40">
                    <div className="w-[50px] h-[50px] mx-4 hover:scale-[1.1] mt-4">        
                        <a href="mailto:jhona.quejada@gmail.com">
                            <img src={data.gmail.logo} alt={data.gmail.name} />
                        </a>
                    </div>
                    {
                        data.social.map((social,index) => {
                            return (
                                <div key={index} className="flex flex-col justify-center items-center w-[50px] h-[50px] mx-4 hover:scale-[1.1] mt-4">
                                    <a href={social.source} target="_blank" rel="noreferrer">
                                    <img src={social.logo} alt={social.name} />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}