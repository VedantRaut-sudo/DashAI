import React, { useEffect, useState } from 'react'
import data from '../../../config/data'
import './style.css'; // import your CSS file
import next from  './next.png'
import { Link } from 'react-router-dom';
import previous from './previous.png'


function getCategorySlugByCategory(category) {
  const item = data.find(item => String(item.category[0]) === category);
  if (item) {
    return item.categoryslug;
  }
  return null;
}
function getuniqueid(category) {
  const item = data.find(item =>String(item.category[0]) === category);
  if (item) {
    return item.categoryid;
    
  }
  return null;
}


const Swiper = ({category}) => {
  const [uniqueCategory, setUniqueCategory] = useState([]);
  
  useEffect(() => {
    const categorySet = new Set(data.map((product) => product.category[0]))
    const categoryArray = Array.from(categorySet);
    setUniqueCategory(categoryArray);

  }, [])



  
  const [showText, setShowText] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);


  const handleCategoryClick = () => {
    setShowText(true);
  };
  const handleNextPage = () => {
    const nextPage = (currentPage + 1) % Math.ceil(uniqueCategory.length / 7);
    setCurrentPage(nextPage);
  };
  
  const handlePrevPage = () => {
    const prevPage =
      currentPage === 0
        ? Math.ceil(uniqueCategory.length / 7) - 1
        : (currentPage - 1) % Math.ceil(uniqueCategory.length / 7);
    setCurrentPage(prevPage);
  };
  const startIndex = currentPage * 7;
  const endIndex = Math.min(startIndex + 7, uniqueCategory.length);
  const visibleCategories = uniqueCategory.slice(startIndex, endIndex);


  const categoryslug = getCategorySlugByCategory(category);


  return (
    <div className='swiper'>
      
      <div className="slider">

        <div className='previous-btn btn' disabled={currentPage === 0} onClick={handlePrevPage}>
          <img src={previous} alt="" />
        </div>
        <div className="list">

          {visibleCategories.map((category) => (
              <Link target={'_blank'} className='link_text_decoration_none' to={`/category/${getCategorySlugByCategory(category)}`}>
            <div className='cat' key={getuniqueid(category)}>
                {category}
            </div>
              </Link>
          ))}
        </div>
        <div
          className='next-btn btn'
          disabled={endIndex >= uniqueCategory.length}
          onClick={handleNextPage}
        >
          <img src={next} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Swiper;
