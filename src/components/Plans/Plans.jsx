import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import RightArrow from '../../assets/rightArrow.png'

function Plans() {
    return (
        <div className="flex flex-col gap-16 px-8 max-sm:px-4 mt-24 relative max-sm:w-full" id='plans'>
            <div className='blur w-[36rem] max-sm:w-[12rem] h-[20rem] top-[7rem] left-0'></div>
            <div className='blur w-[36rem] max-sm:w-[12rem] h-[20rem] top-[11rem] right-0'></div>
            <div className="flex flex-row gap-20 font-bold text-5xl justify-center  text-white uppercase italic
            max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:text-3xl max-sm:gap-4">
                <span className="stroke-text max-sm:truncate">LISTO PARA EMPEZAR</span>
                <span className="-mt-1">TU VIEAJE</span>
                <span className="stroke-text">CON NOSOTROS</span>
            </div>
            <div className='flex items-center justify-center gap-12 plans
            max-sm:overflow-x-auto max-sm:overscroll-x-contain max-sm:snap-x max-sm:gap-6 max-sm:w-auto max-sm:justify-normal'>
                {plansData.map((plan, i) => (
                    <div className='flex flex-col gap-8 bg-gray-700 text-white p-6 w-[18rem] plan
                    max-sm:p-4 max-sm:snap-center max-sm:w-[15rem] max-sm:gap-4 max-sm:flex-none' key={i}>
                        {plan.icon}
                        <span className='text-base font-bold'>{plan.name}</span>
                        <span className='text-5xl font-bold'>$ {plan.price}</span>
                        <div className='flex flex-col gap-4'>
                            {plan.features.map((feature, i) => (
                                <div className='flex items-center gap-4'>
                                    <img src={whiteTick} alt="" className='w-4' />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center gap-2 text-xs'>
                            <span>Mira más beneficios</span>
                            <img src={RightArrow} alt="" className='w-[.6rem]' />
                        </div>
                        <button className='btn bg-white text-black text-sm'>Únete ahora</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Plans }