import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import arrow from './arrow.png'


const CatHeader = ({ heading }) => {
  const category_name = heading.charAt(0).toUpperCase() + heading.slice(1);
  return (
    <div className='Category_heading'>
      <div className="category_wrap">

        <div className='Navigation'>

          <h3>
            <span>

              <Link className='link-navigation' to={'/'}>Home</Link>
            </span>

            <span>
              <img src={arrow} alt="" />
            </span>
            <span>

              <Link className='link-navigation' to={'/category'}>
                Explore
              </Link>
            </span>
            <span>
              <img src={arrow} alt="" />
            </span>

            <span>
            <Link className='link-navigation' to={'#'}>
                {category_name}
              </Link>
            </span>
          </h3>
        </div>
        <div className="heading">


          <h1>Browse All The Latest {category_name} AI Tools</h1>
        </div>

      </div>
    </div>
  )
}

export default CatHeader
