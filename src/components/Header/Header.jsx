import { useState } from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

function Header() {
    const mobile = window.innerWidth <= 640 ? true : false
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='flex justify-between'>
            <img src={Logo} alt="" className='w-40 h-12' />
            {(menuOpen === false && mobile === true) ? (
                <div
                    className='bg-gray-900 p-[.5rem] rounded-md max-sm:fixed max-sm:right-8 max-sm:z-50'
                    onClick={() => setMenuOpen(true)}>
                    <img src={Bars} alt="" className='w-6 h-6' />
                </div>


            ) : (
                <div className='fixed top-0 right-0 w-full h-full z-10 bg-gray-900/50' onClick={() => setMenuOpen(false)}>
                    <ul className='flex flex-row gap-8 text-white mt-3
            max-sm:fixed max-sm:right-8 max-sm:z-50 max-sm:flex-col max-sm:bg-gray-600 max-sm:p-8'>
                        <li className='cursor-pointer hover:text-primary' >
                            <Link
                                activeClass='active'
                                to='home'
                                span={true}
                                smooth={true}
                                onClick={() => setMenuOpen(false)}
                            >Inicio</Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary' >
                            <Link
                                to='programs'
                                span={true}
                                smooth={true}
                                onClick={() => setMenuOpen(false)}
                            >Programas
                            </Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary' >
                            <Link
                                to='features'
                                span={true}
                                smooth={true}
                                onClick={() => setMenuOpen(false)}
                            >Sobre nosotros
                            </Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary' >
                            <Link
                                to='plans'
                                span={true}
                                smooth={true}
                                onClick={() => setMenuOpen(false)}
                            >Plenes
                            </Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary' >
                            <Link
                                onClick={() => setMenuOpen(false)}
                                to='testimonials'
                                span={true}
                                smooth={true}
                            >Testimonios</Link>

                        </li>
                    </ul>
                </div>
            )}

        </div>
    )
}

export { Header }