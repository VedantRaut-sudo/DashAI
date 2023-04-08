import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const TrendingCards = ({ title, image, left, right, slug }) => {
    return (
        <Link className='browser_link TCard_for_browser' to={`/explore/${slug}`}>
            <div className='TCard_for_browser' style={{ background: `linear-gradient(214deg ,${left} ,${right})` }}>

                <h1 className='Tcard_heading'> {title}</h1>

            </div>
        </Link>
    )
}

export default TrendingCards
