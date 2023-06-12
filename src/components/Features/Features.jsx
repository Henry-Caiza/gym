import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

function Features() {
    return (
        <div className='px-8 mt-24 flex flex-row w-full max-sm:flex-col' id='features'>
            <div className='grid grid-cols-3 gap-4 w-1/2 max-sm:w-full'>
                <img src={image1} alt="" className='object-cover w-[12rem] row-span-3 h-[28rem]
                max-sm:w-[7rem] max-sm:h-[17rem]' />
                <img src={image2} alt="" className='object-cover w-auto h-[16rem] col-start-2 col-end-4
                max-sm:w-[15rem] max-sm:h-[10rem]' />
                <img src={image3} alt="" className='object-cover w-[14rem] col-start-2 col-end-3 row-span-2
                max-sm:w-[7rem] max-sm:h-[6rem]' />
                <img src={image4} alt="" className='object-cover w-[10rem] h-[11.2rem] row-span-2 col-start-3 col-end-4
                max-sm:w-[7rem] max-sm:h-[6rem]' />
            </div>
            <div className='uppercase gap-4 flex flex-col w-1/2 max-sm:w-full'>
                <span className='font-bold text-primary max-sm:mt-6'>Algunas características</span>
                <div className='text-white text-5xl font-bold max-sm:text-3xl'>
                    <span className='stroke-text'>Por qué </span>
                    <span>escogernos?</span>
                </div>

                <div className='flex flex-col gap-4 '>
                    <div className='flex text-base gap-4 text-white'>
                        <img src={tick} alt="" className='w-8 h-8 max-sm:w-6 max-sm:h-6' />
                        <span className='max-sm:text-sm'>MÁS DE 140 ENTRENADORES EXPERTOS</span>
                    </div>
                    <div className='flex text-base gap-4 text-white'>
                        <img src={tick} alt="" className='w-8 h-8 max-sm:w-6 max-sm:h-6' />
                        <span className='max-sm:text-sm'>ENTRENA MÁS INTELIGENTE Y MÁS RÁPIDO QUE ANTES</span>
                    </div>
                    <div className='flex text-base gap-4 text-white'>
                        <img src={tick} alt="" className='w-8 h-8 max-sm:w-6 max-sm:h-6' />
                        <span className='max-sm:text-sm'>1 PROGRAMA GRATIS PARA NUEVO MIEMBRO</span>
                    </div>
                    <div className='flex text-base gap-4 text-white'>
                        <img src={tick} alt="" className='w-8 h-8 max-sm:w-6 max-sm:h-6' />
                        <span className='max-sm:text-sm'>SOCIOS CONFIABLES</span>
                    </div>
                </div>
                <span className='text-gray-500 font-normal max-sm:text-sm'>NUESTROS PATROCINADORES</span>
                <div className='flex gap-4'>
                    <img src={nb} alt="" className='w-10 max-sm:w-8' />
                    <img src={adidas} alt="" className='w-10 max-sm:w-8' />
                    <img src={nike} alt="" className='w-10 max-sm:w-8' />
                </div>
            </div>
        </div>
    )
}

export { Features }