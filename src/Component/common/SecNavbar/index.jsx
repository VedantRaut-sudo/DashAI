import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import logo from './img.png'
const SecNavbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropDown = () => {
        setShowDropdown(!showDropdown);

    }
    const [navBackground, setNavBackground] = useState("navbar-black");
    useEffect(() => {
        const handleScroll = () => {
            const scrolly = window.scrollY;
            if (scrolly > 0) {
                setNavBackground('navbar-white')

            }
            else {

                setNavBackground('navbar-black')
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }
    )

    return (
        <div className='navbar_wrap'>
            <nav className={`navbar ${navBackground}`}
                role="navigation"
                aria-label='main navigation'
            >
                <div className="leftside">
                    <Link to={'/'}>
                    <img className='logo' src={logo} alt="" />
                    </Link>

                </div>
                <div className="rightside">
                    <ul>

                        <li>
                            <Link className='list_item small-device-hide' to={'/news'}> News</Link>
                        </li>
                        <li>
                            <Link className='list_item' onClick={toggleDropDown} to='#'>
                            {/* <Link className='list_item' onClick={toggleDropDown} to='#'> */}
                                Explore</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='dropdown-wrap'>
                {showDropdown && (
                    <ul className='dropdown-menu'>
                        <h1>this is menu</h1>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default SecNavbar
