import React from 'react'
import arrow from './arrow.png'
import './style.css'
import share from './share.png'
import { Link } from 'react-router-dom'
import check from './check.png'
import lock from './padlock.png'
import unlock from './padlock-unlock.png'

import instagram_logo from './instagram.png'
import facebook_logo from './facebook.png'
import linkedin_logo from './linkedin.png'

const ItemComponent = ({ linkedin, title, facebook, instagram, duration, description, url, price, image, verified, plan }) => {
  return (

    <div className='item-page-wrap'>
      <div className="navigation-tab">
        <h3>
          <span>
            <Link className='link' to={'/'}>Home</Link>
          </span>
          <span>
            <img src={arrow} alt="" />
          </span>
          <span>
            <Link className='link' to={'/category'}>Category</Link>
          </span>
          <span>
            <img src={arrow} alt="" />
          </span>
          <span className='link'>
            {title}
          </span>
        </h3>
      </div>


      <h1 className='title_heading'>{title}</h1>
      <div className="item-wrap">
        <div className="cover_wrap">

          <img className='cover_image' src={image} alt="cover_img" />
        </div>
        <div className="data_wrap">

          <p className='description_p'>{description}</p>
          <div className="btns">
            <div className="link_button">
                <Link className='link_for_redirecting' to={url}>
              <h3 className='open_link'>
                
                Open
              </h3>
                </Link>
            </div>
            <div >
              <Link className="shareimg" to={'#'}>
                <img src={share} alt="" />
              </Link>
            </div>
          </div>
          {verified ? (
            < div className='verified'>
              <img className='check' src={check} alt="" />
              Highly recommended AI Tool from Dash AI Team
            </div>
          ) : <></>

          }
          {

            plan === 'Paid' ? (
              <div className='plan_info'>
                <img className='check' src={lock} alt="" />
                <h4><span className='strong'>
                  Plan:

                </span>Plans start from $ {price}</h4>
              </div>
            ) :
              plan === 'Freemium' ? (
                <div className='plan_info'>
                  <img className='check' src={lock} alt="" />
                  <h4><span className='strong'>
                    Plan:

                  </span> Paid plans start from $ {price} </h4>
                </div>
              ) : (<div className='plan_info'>
                <img className='check' src={unlock} alt="" />
                <h4><span className='strong'>
                  Plan:

                </span> Free </h4>
              </div>)


          }

        </div>
      </div>

      <div className="tool-social-links">
        <h3>Social Link</h3>
        <div className="link_img">
          <Link target={'_blank'} to={instagram}>
          
          <img src={instagram_logo} alt="" />
          </Link>
          <Link target={'_blank'} to={linkedin}>
          
          <img src={linkedin_logo} alt="" />
          </Link>
          <Link target={'_blank'} to={facebook}>
          
          <img src={facebook_logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="ads">
        Ads
      </div>
      
    </div>
  )
}

export default ItemComponent
