import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import externallink from './link.png'
export class ToolBoxData extends Component {
    render() {

        let { title, description, image, plan, slug, link } = this.props;
        return (
            <div className='tool_card_wrap'>
                <img className='card_image' Loading="priority" src={image} alt="cover" />
                <div className="card_data">
                    <div className="card_detail">
                        <Link className='link' to={`/category/tool/${slug}`}>

                            <h3>{title}</h3>
                            <p>{description}...</p>
                        </Link>
                        <div className="badge">
                            <span>{plan}</span>
                        </div>
                    </div>
                    <div className="link_box_wrap">
                        <Link className='link_btn link' target={"_blank"} to={link}>
                            <div className="website_link_btn primary_btn">

                                <img className='external-link-img' src={externallink} alt="link" />


                            </div>
                        </Link>
                        <Link className='link_btn link' to={`/category/tool/${slug}`}>
                            <div className="website_link_btn secondary_btn">
                                <p>

                                    Know more
                                </p>

                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default ToolBoxData
