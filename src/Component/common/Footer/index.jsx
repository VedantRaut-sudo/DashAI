import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import footer_logo from './logo.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'
const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="footer_wrap">
                <div className="footer_left">
                    <img src={footer_logo} alt="logo" />
                    <h2>

                        Dash AI
                    </h2>
                </div>
                <div className="footer_center">
                    <Link className='center_link'>
                        <p>Copyright</p>
                    </Link>
                    <Link className='center_link'>
                        <p>Privacy Policy</p>
                    </Link>
                    <Link className='center_link'>
                        <p>Terms and Services</p>
                    </Link>
                </div>
                <div className="footer_right">
                    <Link >
                        <img className='social_link_img' src={instagram} alt="" />
                    </Link>
                    <Link ><img className='social_link_img' src={linkedin} alt="" /></Link>
                    <Link ><img className='social_link_img' src={twitter} alt="" /></Link>
                </div>
            </div>
            <div className="footer_mob">
                <div className="footer_up">

                    <div className="footer_logo_section">
                        <img className='mob_dashai_logo' src={footer_logo} alt="logo" />
                        <h2>

                            Dash AI
                        </h2>
                    </div>

                    <div className="footer_right">
                        <Link >
                            <img className='social_link_img_mob' src={instagram} alt="" />
                        </Link>
                        <Link ><img className='social_link_img_mob' src={linkedin} alt="" /></Link>
                        <Link ><img className='social_link_img_mob' src={twitter} alt="" /></Link>
                    </div>

                </div>
                <div className="footer_down">
                <Link className='center_link'>
                        <p>Copyright</p>
                    </Link>
                    <Link className='center_link'>
                        <p>Privacy Policy</p>
                    </Link>
                    <Link className='center_link'>
                        <p>Terms and Services</p>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
