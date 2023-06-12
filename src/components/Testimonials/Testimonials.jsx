import { useState } from "react"
import { testimonialsData } from "../../data/testimonialsData"
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

import { motion } from "framer-motion"

function Testimonials() {
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length

    const transition = { type: 'spring', duration: 3 }

    return (
        <div className="flex flex-row gap-4 px-8 w-full mt-24
        max-sm:flex-col" id="testimonials">
            <div className="flex flex-col gap-8 uppercase text-white w-1/2 max-sm:w-full max-sm:gap-2">
                <span className="font-bold text-via-green-500 max-sm:mb-4">Testimonios</span>
                <span className="font-bold text-5xl stroke-text max-sm:text-3xl">Lo que dicen</span>
                <span className="font-bold text-5xl max-sm:text-3xl">Sobre nosotros</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    className="normal-case text-justify tracking-[2px] leading-10 max-sm:leading-8 max-sm:text-sm">
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span className="text-via-green-500">
                        {testimonialsData[selected].name}
                    </span> - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="relative w-1/2 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-2">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="absolute  w-[17rem] h-[20rem] border-2 border-primary bg-transparent right-36 top-[.9rem]
                    max-sm:relative max-sm:hidden"></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="absolute  w-[17rem] h-[19rem] top-16 right-28 bg-gradient-to-tr from-primary to-secondary
                    max-sm:relative max-sm:hidden"></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image} alt="" className="absolute w-[17rem] h-[20rem] object-cover right-32 top-8
                    max-sm:top-0 max-sm:right-0 max-sm:relative max-sm:self-center" />
                <div className="flex gap-4 absolute first-letter bottom-4 left-12 ">
                    <img src={leftArrow} alt="" className="w-6 cursor-pointer"
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1)
                        }}
                    />
                    <img src={rightArrow} alt="" className="w-6 cursor-pointer"
                        onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export { Testimonials }