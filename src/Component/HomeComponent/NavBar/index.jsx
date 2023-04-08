import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import newslogo from './newslogo.png'
import categoryicon from './categoryicon.png'
import logo from './img.png'
import facebooklogo from './facebooklogo.png'
import twitterlogo from './twitterlogo.png'
import gmaillogo from './gmaillogo.png'
import youtubelogo from './youtubelogo.png'
import linkedin from './linkedin (6).png'
const NavBar = () => {
    const [navexpplorebtn, setNavExploreBtn] = useState(false);
    const fun = () => {
        setNavExploreBtn(!navexpplorebtn)
        document.body.style.overflow = navexpplorebtn ? "visible" : "hidden";


    }
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
            <nav className={`navbar ${navexpplorebtn ? 'expanded' : 'minimized'}  ${navBackground}`}
                role="navigation"
                aria-label='main navigation'
            >
                <div className='upnav'>


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
                                <Link className='list_item small-device-hide' onClick={toggleDropDown} to='#'>
                                    {/* <Link className='list_item' onClick={toggleDropDown} to='#'> */}
                                    Explore</Link>
                            </li>
                        </ul>


                    </div>
                    <button
                        id='navv'
                        className='navbar-toggle'
                        onClick={fun}
                    >
                        <span className="navbar-toggle-icon"></span>
                    </button>
                </div>
                <div className="lownav">

                    <div className="showMobSuggestion">
                        {navexpplorebtn && (
                            <div className="explore">
                                {/* <Link>
                                    Discover
                                </Link>
                                <Link >
                                    News
                                </Link> */}
                                <div className="nav_section">

                                    <Link onClick={fun} to={'./category'} className='link'>
                                        <div className='inside_mob_nav_section'>
                                            <img src={categoryicon} alt="" />
                                            <h2>Discover by Category</h2>
                                        </div>
                                    </Link>
                                    <Link onClick={fun} to={'./news'} className='link'>
                                        <div className='inside_mob_nav_section'>
                                            <img src={newslogo} alt="" />
                                            <h2>News Letter</h2>
                                        </div>
                                    </Link>

                                </div>
                                <div className="nav_section">

                                    <h1>Social Links</h1>
                                    <div className="social_link_for_nav_mob_wrap">

                                        <Link className="social_link_for_nav_mob">

                                            <img src={facebooklogo} alt="" />
                                            <h3>Facebook</h3>
                                        </Link>
                                        <Link className="social_link_for_nav_mob">
                                            <img src={gmaillogo} alt="" />
                                            <h3>Gmail</h3>
                                        </Link>
                                        <Link className="social_link_for_nav_mob">
                                            <img src={twitterlogo} alt="" />
                                            <h3>Twitter</h3>
                                        </Link>
                                        <Link className="social_link_for_nav_mob">
                                            <img src={linkedin} alt="" />
                                            <h3>Linkedin</h3>
                                        </Link>
                                        <Link className="social_link_for_nav_mob">
                                            <img src={youtubelogo} alt="" />
                                            <h3>Youtube</h3>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <div className='dropdown-wrap'>
                {showDropdown && (
                    <ul className='dropdown-menu'>
                        <div className="nav_section">

                            <Link onClick={fun} to={'./category'} className='link'>
                                <div className='inside_mob_nav_section'>
                                    <img src={categoryicon} alt="" />
                                    <h2>Discover by Category</h2>
                                </div>
                            </Link>
                            <Link onClick={fun} to={'./news'} className='link'>
                                <div className='inside_mob_nav_section'>
                                    <img src={newslogo} alt="" />
                                    <h2>News Letter</h2>
                                </div>
                            </Link>

                        </div>
                        <div className="nav_section">

                            <h1>Social Links</h1>
                            <div className="social_link_for_nav_mob_wrap">

                                <Link className="social_link_for_nav_mob link">

                                    <img src={facebooklogo} alt="" />
                                    <h3>Facebook</h3>
                                </Link>
                                <Link className="social_link_for_nav_mob link">
                                    <img src={gmaillogo} alt="" />
                                    <h3>Gmail</h3>
                                </Link>
                                <Link className="social_link_for_nav_mob link">
                                    <img src={twitterlogo} alt="" />
                                    <h3>Twitter</h3>
                                </Link>
                                <Link className="social_link_for_nav_mob link">
                                    <img src={linkedin} alt="" />
                                    <h3>Linkedin</h3>
                                </Link>
                                <Link className="social_link_for_nav_mob link">
                                    <img src={youtubelogo} alt="" />
                                    <h3>Youtube</h3>
                                </Link>

                            </div>
                        </div>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default NavBar
