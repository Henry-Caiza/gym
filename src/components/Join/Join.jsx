import React, { useRef } from 'react'
import emailjs from 'emailjs-com';

function Join() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pluvsrn', 'template_cc7uzl3', form.current, 'UdimX0aZLlv6eKzKS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='mt-24 flex flex-row px-8 gap-40 max-sm:flex-col max-sm:gap-4 max-sm:w-full' id='join'>
            <div className='text-white text-5xl uppercase relative font-bold max-sm:text-2xl max-sm:flex max-sm:flex-col '>
                <hr className='absolute w-36 border-2 border-primary rounded-[20%] -my-[10px]' />
                <div className='flex gap-4 mb-2 '>
                    <span className='stroke-text'>LISTO PARA</span>
                    <span> ELEVAR</span>
                </div>
                <div className='flex gap-4'>
                    <span className=''>TU CUERPO</span>
                    <span className='stroke-text'> CON NOSOTROS?</span>
                </div>
            </div>
            <div className='flex justify-center items-end max-sm:py-8 max-sm:w-9/12 max-sm:self-center'>
                <form ref={form} onSubmit={sendEmail} className='flex gap-12 max-sm:gap-4 bg-slate-600 py-4 px-8
                max-sm:py-2 max-sm:px-4'>
                    <input type="email" name='user_email' placeholder='Ingresa tu correo' className='bg-transparent border-none outline-none text-gray-300 placeholder:text-gray-400' />
                    <button className='btn bg-primary text-white max-sm:text-xs'>Únete ahora</button>
                </form>
            </div>
        </div>
    )
}

export { Join }