import GitHub from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

function Footer() {
    return (
        <div className='relative mt-24 bg-gray-900'>
            <hr className='border border-gray-600' />
            <div className='py-4 px-8 flex flex-col gap-16 items-center justify-center h-64'>
                <div className='flex gap-16'>
                    <img src={GitHub} alt="" className='w-8 h-8 cursor-pointer' />
                    <img src={Instagram} alt="" className='w-8 h-8 cursor-pointer' />
                    <img src={LinkedIn} alt="" className='w-8 h-8 cursor-pointer' />
                </div>
                <div>
                    <img src={Logo} alt="" className='w-40' />
                </div>
            </div>

        </div>
    )
}

export { Footer }