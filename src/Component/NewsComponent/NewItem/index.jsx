import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export class NewItem extends Component {
    render() {
        let { title, description, url, image, date } = this.props;
        return (
            
            <div className="newsItem_wrap">

                <Link className='link' to={url}>
                    <div className='news_item_wrap'>
                        <img src={image} alt="" />
                        <div className="news_data">

                            <h1>{title}..   <span> <p className='date'>( {date} ) </p></span></h1>
                            <p>{description}...</p>
                            
                        </div>


                    </div>
                </Link>
            </div>
        )
    }
}

export default NewItem
