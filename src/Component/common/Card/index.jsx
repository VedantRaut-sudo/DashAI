import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const Card = ({ title, image,slug }) => {
    return (
        <Link className='browser_Link' target={'_blank'} to={`/category/${slug}`}>
        <div className='Card_for_browser'>
            <div className="cover_image_wrap">

                <img src={image} alt="" />
            </div>
            <h1 className='card_heading'> {title}</h1>

        </div>
        </Link>
    )
}

export default Card
