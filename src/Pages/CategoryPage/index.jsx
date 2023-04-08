import CatHeader from '../../Component/Category/CatHeader'
import React from 'react';
import { useParams } from 'react-router-dom';
import ToolListCommon from '../../Component/common/ToolListCommonn';
import Swiper from '../../Component/common/Swiper'
import SecNavbar from '../../Component/common/SecNavbar';
// import SearchBar from '../../Component/HomeComponent/SearchBar'

const CategoryPage = ({items}) => {
    const { category } = useParams();
    const filterItem = items.filter((item) => item.categoryslug === category);
    // const fil=filterItem.filter((item)=>item.plan==='Freemium')
    
    return (
        <div>
{/* <SecNavbar/> */}

<CatHeader heading={category}/>
{/* filter section */}
{/* <Swiper/> */}
           
<ToolListCommon data={filterItem}/>

        </div>
    )
}

export default CategoryPage



// import React from 'react'

// const CategoryPage = () => {
//   return (
//     <div>
//       <CatHeader/>
      
//     </div>
//   )
// }

// export default CategoryPage

