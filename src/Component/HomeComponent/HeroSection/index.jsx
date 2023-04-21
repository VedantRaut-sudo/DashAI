import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import './style.css'

const HeroSection = () => {
    return (


        <div id='hero_section'>


            <div className="main_hero">
                <div className="data">
                  
                    <h3>Become an Expert with these AI-powered tools</h3>
                    <h1>More Than <span className='gradiant'>1000+</span>   AI Tools Are Here </h1>

                </div>
                <div className="Searchbar_plus_browsebtn_wrap">

                    <SearchBar />
                    <div className="browse_btn" >
                        <Link className='browse_btn_link' to='/category/'>Discover</Link>
                    </div>
                </div>
                <div className="trending_suggestion_wrap">
                    <h6 className='heading_for_trending_section'>Trending searches</h6>

                    <div className="btn_trend">
                        <Link className='link'  target='_blank' to={'/category/productivity'}> 
                            <div className="trend_item">
                                Productivity
                            </div>
                        </Link>

                    </div>
                    <div className="btn_trend">
                        <Link className='link'  target='_blank' to={'/category/video-editing'}>
                            <div className="trend_item">
                                Video Editing
                            </div>
                        </Link>

                    </div>
                    <div className="btn_trend">
                        <Link className='link'  target='_blank' to={'/category/coding'}>
                            <div className="trend_item">
                                Coding
                            </div>
                        </Link>

                    </div>
                    <div className="btn_trend">
                        <Link className='link'  target='_blank' to={'/category/design'}>
                            <div className="trend_item">
                                Design
                            </div>
                        </Link>

                    </div>
                    <div className="btn_trend">
                        <Link className='link'  target='_blank' to={'/category/image-generator'}>
                            <div className="trend_item">
                                Image Generator
                            </div>
                        </Link>

                    </div>
                    <div className="btn_trend">
                        <Link className='link'   target='_blank' to={'/category/assistant'}>
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
