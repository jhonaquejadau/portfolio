import React from "react";
import { useState, useRef } from "react";
import { data } from "../utils/data";
import emailjs from '@emailjs/browser';

export const Contact = () => {

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
        <section className=" w-full h-[100vh] bg-[rgba(0,0,0,0.95)] flex justify-center items-center">
            <div className=" w-[50%] p-8 flex justify-center">
                <form ref={form} className="w-[80%] mx-auto" onSubmit={sendEmail}>
                    <label className="text-slate-200 capitalize font-bold">
                        name
                        <input
                            required
                            className="w-full bg-[rgba(0,0,0,0.3)] text-white p-2" 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleFormData} />
                    </label>
                    <label className="text-slate-200 capitalize font-bold my-2">
                        email
                        <input
                            required 
                            className="w-full bg-[rgba(0,0,0,0.3)] text-white p-2" 
                            type="text" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleFormData}/>
                    </label>
                    <label className="text-slate-200 capitalize font-bold my-2">
                        subject
                        <input
                            required 
                            className="w-full bg-[rgba(0,0,0,0.3)] text-white p-2" 
                            type="text" 
                            name="subject" 
                            value={formData.subject} 
                            onChange={handleFormData}/>
                    </label>
                    <label className="text-slate-200 capitalize font-bold">
                        textarea
                        <textarea 
                            required
                            className="w-full h-[200px] bg-[rgba(0,0,0,0.3)] text-white p-2" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleFormData}/>
                    </label>
                    <button 
                        className="w-full py-2 px-[15em] bg-[rgba(0,0,0,0.3)] border-2 text-slate-200 capitalize hover:bg-slate-200 hover:text-[#031926] font-bold "
                        type="submit"    
                    >
                        contact me
                    </button>
                </form>
            </div>
            <div className="w-[50%] flex flex-col justify-center">
                <p className="text-slate-200 text-[5rem] capitalize">contact</p>
                <p className="text-xl text-slate-400 font-bold">Did you like my profile?</p>
                <p className="text-slate-500 text-2xl w-[80%]">{data.interest}</p>
                <div className="flex flex-row items-center w-fit mt-6">
                    <div className="w-[50px] h-[50px] mx-4 hover:scale-[1.1]">        
                        <a href="mailto:jhona.quejada@gmail.com">
                            <img src={data.gmail.logo} alt={data.gmail.name} />
                        </a>
                    </div>
                    {
                        data.social.map((social,index) => {
                            return (
                                <div key={index} className="flex flex-col justify-center items-center w-[50px] h-[50px] mx-4 hover:scale-[1.1]">
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