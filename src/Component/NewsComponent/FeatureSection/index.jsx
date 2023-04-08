import React, { Component } from 'react'

import './style.css'

export class FeatureSection extends Component {
    render() {
        const { title, image } = this.props;
        return (
            
                <div className='main_wrap'>
                    <div className="coverImg" style={{ backgroundImage: `url(${image})` }}>
                        <h1 className='newtitle'>{title}</h1>
                    </div>
                </div>
            
        )
    }
}

export default FeatureSection

