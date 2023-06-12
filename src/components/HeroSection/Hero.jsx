import { Header } from "../Header/Header"
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

import { motion } from "framer-motion"
import NumberCounter from 'number-counter'

function Hero() {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 640 ? true : false
    return (
        <div className="flex justify-between max-sm:flex-col" id="home">
            <div className="blur w-[22rem] h-[30rem] left-0 max-sm:w-[14rem]"></div>
            <div className="p-8 pt-6 w-3/4 flex flex-col gap-8 max-sm:w-full">
                <Header />
                <div className="mt-16 bg-secondary rounded-full w-fit py-5 px-4 uppercase text-white relative flex items-center justify-start 
                max-sm:mt-0 max-sm:text-sm max-sm:self-center scale-[.8]">
                    <motion.div
                        initial={{ left: mobile ? '188px' : '228px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                        className="absolute bg-primary w-20 h-4/5 left-2 rounded-full"></motion.div>

                    <span className="z-10">el mejor club fitness de la ciudad</span>
                </div>
                <div className="flex flex-col gap-6 uppercase text-7xl font-bold text-white hero-text 
                max-sm:text-4xl max-sm:items-center justify-center">
                    <div>
                        <span className="stroke-text">Forma </span><span>Tu</span>
                    </div>
                    <div>
                        <span>Cuerpo ideal</span>
                    </div>
                    <div className="text-base font-extralight normal-case tracking-wide w-4/5
                    max-sm:text-sm max-sm:font-extralight max-sm:w-full max-sm:tracking-[.25] max-sm:text-center">
                        <span>
                            Aquí te ayudamos a formar y contruir tu cuerpo para que vivas tu vida al máximo nivel!
                        </span>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col">
                        <span className="text-white text-4xl max-sm:text-lg">
                            <NumberCounter end={140} start={100} delay='4' preFix='+' />
                        </span>
                        <span className="text-gray-500 uppercase
                        max-sm:text-sm">entrenadores expertos</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white text-4xl
                        max-sm:text-lg">
                            <NumberCounter end={978} start={800} delay='4' preFix='+' />
                        </span>
                        <span className="text-gray-500 uppercase
                        max-sm:text-sm">personas entrenando</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white text-4xl
                        max-sm:text-lg">
                            <NumberCounter end={50} start={0} delay='2' preFix='+' />
                        </span>
                        <span className="text-gray-500 uppercase
                        max-sm:text-sm">rutinas fitness</span>
                    </div>
                </div>
                <div className="flex gap-4 font-normal
                max-sm:justify-center">
                    <button className="btn bg-primary w-32 text-white">Comenzar</button>
                    <button className="btn bg-transparent w-36 border-2 border-primary text-white">Aprender Más</button>
                </div>
            </div>

            <div className=" w-1/4 relative bg-primary 
            max-sm:w-full max-sm:bg-transparent max-sm:relative">
                <button className="btn absolute right-12 top-8 bg-white text-black max-sm:right-4">Únete ahora</button>

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="flex flex-col gap-4 bg-secondary/90 w-fit p-4 items-start rounded-lg absolute right-16 top-28
                    max-sm:left-4 max-sm:top-8">
                    <img src={Heart} alt="" className="w-8" />
                    <span className="text-gray-400 max-sm:text-sm">Ritmo Cardíaco</span>
                    <span className="text-white text-2xl max-sm:text-xl">116 bpm</span>
                </motion.div>

                <img src={hero_image} alt="" className="absolute top-40 right-36 w-[23rem] 
                max-sm:relative max-sm:w-60 max-sm:left-28 max-sm:top-16 max-sm:self-center" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt=""
                    className="absolute top-16 right-[21rem] -z-10 w-[15rem] 
                    max-sm:w-60 max-sm:left-8 max-sm:top-0" />

                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                    className="flex gap-8 bg-secondary  p-4 rounded-lg w-2/3 absolute top-[32rem] right-[30rem]
                    max-sm:relative max-sm:top-20 max-sm:left-16">
                    <img src={Calories} alt="" className="w-12 max-sm:w-8" />
                    <div className=" flex flex-col justify-between">
                        <span className="text-gray-400">Calorias quemadas</span>
                        <span className="text-white text-2xl max-sm:text-base">220 kcal</span>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export { Hero }