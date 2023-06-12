import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

function Programs() {
    return (
        <div className="flex flex-col gap-8 px-8 mt-24" id='programs'>
            <div className="flex flex-row gap-20 font-bold text-5xl justify-center  text-white uppercase italic 
            max-sm:flex-col max-sm:gap-4 max-sm:text-3xl max-sm:items-center max-sm:justify-center max-sm:mt-8">
                <span className="stroke-text max-sm:truncate">Explora nuestros</span>
                <span className="-mt-1">mejores</span>
                <span className="stroke-text">programas</span>
            </div>

            <div className='gap-4 grid grid-cols-4 max-sm:flex max-sm:flex-col'>
                {programsData.map((program) => (
                    <div className='flex flex-col bg-slate-600 p-8 gap-4 text-white justify-between category cursor-pointer hover:bg-gradient-to-tr from-secondary  to-primary 
                    ' key={program.heading}>
                        {program.image}
                        <span className='text-base font-bold'>{program.heading}</span>
                        <span className='text-[0.9rem] leading-[25px]'>{program.details}</span>
                        <div className='flex items-center gap-8'>
                            <span>Únete ahora</span>
                            <img src={RightArrow} alt="" className='w-4' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Programs }