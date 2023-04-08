import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import './style.css'
// import NavBar from '../NavBar'
// import video from './pexel.mp4'

const HeroSection = () => {
    return (


        <div id='hero_section'>


            <div className="main_hero">
                <div className="data">
                    {/* 
                <h1>Become an Expert with these AI-powered tools</h1>
                <h2>More than <span className='gradiant'>1000+</span>   AI tools are here </h2>
                <h3>Tools that makes your life easy</h3> */}
                    {/* <h3>Find the AI you are looking for</h3> */}
                    {/* <h1>Dash AI</h1> */}
                    <h3>Become an Expert with these AI-powered tools</h3>
                    <h1>More Than <span className='gradiant'>1000+</span>   AI Tools Are Here </h1>

                </div>
                <div className="Searchbar_plus_browsebtn_wrap">

                    <SearchBar />
                    <div className="browse_btn">
                        <Link className='browse_btn_link' to='/category/'>Discover</Link>
                    </div>
                </div>
                <div className="trending_suggestion_wrap">
                    <h6 className='heading_for_trending_section'>Trending searches</h6>

                    <div className="btn_trend">
                        <Link className='link'>
                            <div className="trend_item">
                                Productivity
                            </div>
                        </Link>

                    </div>
                    <div className="btn_trend">
                        <Link className='link'>
                            <div className="trend_item">
                                Video Editing
                            </div>
                        </Link>

                    </div>
                    <div className="btn_trend">
                        <Link className='link'>
                            <div className="trend_item">
                                Coding
                            </div>
                        </Link>

                    </div>
                    <div className="btn_trend">
                        <Link className='link'>
                            <div className="trend_item">
                                Design
                            </div>
                        </Link>

                    </div>
                    <div className="btn_trend">
                        <Link className='link'>
                            <div className="trend_item">
                                Image Generator
                            </div>
                        </Link>

                    </div>
                    <div className="btn_trend">
                        <Link className='link'>
                            <div className="trend_item">
                                Assitant
                            </div>
                        </Link>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default HeroSection
