import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../config/data';
import ItemComponent from '../../Component/ItemComponent';
import Footer from '../../Component/common/Footer';

const ItemPage = () => {
    const { tool } = useParams();
    const [blog, setBlog] = useState('');
    useEffect(() => {
        let blog = data.find((item) => item.slug === tool)
        if (blog) {
            setBlog(blog);
        }

    }, [tool]);


    return (
        <div>

           
            {
                blog ?
                    (
                        
                        <>
                            <ItemComponent title={blog.title} description={blog.description} image={blog.image} url={blog.link} verified={blog.verified} price={blog.price} duration={blog.duration} instagram={blog.instagram} facebook={blog.facebook} linkedin={blog.linkedin} plan={blog.plan} />
                        </>
                    ) : <p>no data</p>
            }
            <Footer/>
        </div>
    )
}

export default ItemPage
