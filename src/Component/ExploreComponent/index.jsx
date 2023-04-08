import React from 'react'
import { useState } from 'react';
import './style.css'
import arrow from './arrow.png'
import Card from '../common/Card';
import TrendingCards from '../common/TrendingCards';
import ALL from '../../config/BrowsePageData/AllCategory'
import productivetool from '../../config/BrowsePageData/productivity';
import developer_tool from '../../config/BrowsePageData/developer';
import SearchBar2 from './Searchbar2';

const treandcarddata = [
    { id: 1, title: "Copy Writing", left: "#0061ff", right: "#60efff" },
    { id: 2, title: "Avatar", left: "#ff0f7b", right: "#f89b29" },
    { id: 4, title: "Audio", left: "#ff930f", right: "#fff95b" },
    { id: 3, title: "Image Generator", left: "#30c5d2", right: "#471069" },
    { id: 5, title: "Video Editing", left: "#f3f520", right: "#59d102" },
    { id: 6, title: "Coding", left: "#8de9d5", right: "#6617CB" },
    
];

const ExploreComponent = () => {
    const [showMore, setShowMore] = useState(false);
    const [showMoreproductivity, setShowMoreproductivity] = useState(false);
    const [showMorecoding, setShowMorecoding] = useState(false);
    const handleviewmmore = () => {
        setShowMore(true);
    }
    const handleViewLess = () => {
        setShowMore(false);
    };
    const handleviewmmorecoding = () => {
        setShowMorecoding(true);
    }
    const handleViewLesscoding = () => {
        setShowMorecoding(false);
    };
    const handleviewmmoreproductivity = () => {
        setShowMoreproductivity(true);
    }
    const handleViewLessproductivity = () => {
        setShowMoreproductivity(false);
    };
    return (
        <div className='Main_Browse_wrap'>
            <div className="Explore_Page_Upper_section">
                <div className="Page_Heading">
                    <h2 className='browsePage_section_title'>Most Popular</h2>

                </div>
                <div className="Browser_search_input">
                   <SearchBar2/>
                </div>
            </div>
            <div className='Trending'>
                {treandcarddata.slice(0, 6).map((card) => (
                    
                    <TrendingCards key={card.id} title={card.title} image={card.image} left={card.left} right={card.right} slug={card.slug}/>
                ))}
            </div>
            <div className="Explore_Page_Lower_Section">
                <h2 className='browsePage_section_title'>Productivity Tools</h2>
                <div className="section_1">
                    {productivetool.slice(0, 4).map((card) => (
                        <Card key={card.id} title={card.title} image={card.image}slug={card.slug} />
                    ))}

                    {showMoreproductivity && (
                        // <div className="cards-container">
                        // <div>
                        <>
                            {productivetool.slice(4).map((card) => (
                                <Card key={card.id} title={card.title} image={card.image}  slug={card.slug}/>
                            ))}
                        </>
                        //  </div>
                    )}

                </div>
                <div className="btn_for_more">

                    {showMoreproductivity ? (
                        <div className="view-more-button" onClick={handleViewLessproductivity}>View Less<span><img src={arrow} alt="" /></span></div>
                    ) : (
                        <div className="view-more-button" onClick={handleviewmmoreproductivity}>View More<span><img src={arrow} alt="" /></span></div>
                    )}
                </div>
            </div>
            <div className="Explore_Page_Lower_Section">
                <h2 className='browsePage_section_title'>For Developer</h2>
                <div className="section_1">
                    {developer_tool.slice(0, 4).map((card) => (
                        <Card key={card.id} title={card.title} image={card.image} slug={card.slug}/>
                    ))}

                    {showMorecoding && (
                        // <div className="cards-container">
                        // <div>
                        <>
                            {developer_tool.slice(4).map((card) => (
                                <Card key={card.id} title={card.title} image={card.image} slug={card.slug}/>
                            ))}
                        </>
                        //  </div>
                    )}

                </div>
                <div className="btn_for_more">

                    {showMorecoding ? (
                        <div className="view-more-button" onClick={handleViewLesscoding}>View Less<span><img src={arrow} alt="" /></span></div>
                    ) : (
                        <div className="view-more-button" onClick={handleviewmmorecoding}>View More<span><img src={arrow} alt="" /></span></div>
                    )}
                </div>
            </div>
            <div className="Explore_Page_Lower_Section">
                <h2 className='browsePage_section_title'>All</h2>
                <div className="section_1">
                    {ALL.slice(0, 4).map((card) => (
                        <Card key={card.id} title={card.title} image={card.image} />
                    ))}

                    {showMore && (
                        // <div className="cards-container">
                        // <div>
                        <>
                            {ALL.slice(4).map((card) => (
                                <Card key={card.id} title={card.title} image={card.image} />
                            ))}
                        </>
                        //  </div>
                    )}

                </div>
                <div className="btn_for_more">

                    {showMore ? (
                        <div className="view-more-button" onClick={handleViewLess}>View Less<span><img src={arrow} alt="" /></span></div>
                    ) : (
                        <div className="view-more-button" onClick={handleviewmmore}>View More<span><img src={arrow} alt="" /></span></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ExploreComponent
