import React, { useEffect, useState } from 'react'
import './style.css'
import data from '../../../config/data'
import No_Result from './no-results.png'
import { Link } from 'react-router-dom'

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestion] = useState([]);

    useEffect(() => {
        setSuggestion(data);
    }, []);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value)
        const filteredData = value
            ? data.filter(
                (item) =>
                    item.title.toLowerCase().includes(value.toLowerCase()) ||
                    item.category[0].toLowerCase().includes(value.toLowerCase())
                // item.subCategory[1].toLowerCase().includes(value.toLowerCase

            ) : [];
        setSuggestion(filteredData)
    };


    const renderTitleSection = () => {
        const titleSuggestion = suggestions.filter(
            (item) => item.title.toLowerCase().includes(query.toLowerCase())
        );
        if (titleSuggestion.length === 0) {
            return null;
        }
        return (
            <div>
                <h2 className='tool_suggestion_heading'>Tools</h2>
                <ul>
                    {titleSuggestion.slice(0, 5).map((item) => (
                        <li className='tool_suggestion_list' key={item.title}>
                            <p>
                                <Link className='link-suggestions'  to={`/category/tool/${item.slug}`}>

                                    {item.title}
                                </Link>
                            </p>

                        </li>
                    ))}
                </ul>
            </div>
        )
    }


    const renderCategorySection = () => {
        const categorySuggestion = suggestions.filter((item) =>
            item.category[0].toLowerCase().includes(query.toLowerCase())
            // item.subCategory[1].toLowerCase().includes(query.toLowerCase())
        );
        if (categorySuggestion.length === 0) {
            return null
        }
        return (
            <div>
                <h2 className="category_suggestion_heading">Categories</h2>
                <ul>
                    {categorySuggestion.slice(0, 2).map((item) => (
                        <li className='category_suggestion_list' key={item.title}>

                            <p>
                                <Link className='link-suggestions' target={"_blank"} to={`/category/${item.categoryslug}`}>
                                    {item.category}
                                </Link>
                            </p>
                            {/* 
                            <p>
                                
                                {item.category[1]}</p> */}

                        </li>
                    ))}
                </ul>
            </div>
        )
    }
    const renderNoDataFound = () => {
        if (suggestions.length === 0) {
            return (
                <div>
                    <img className='no_result' src={No_Result} alt="no result" />
                </div>
            )
        }
    }


    return (
        <div className='search_wrap'>
            <input type="text" value={query} onChange={handleInputChange} className='searchBar' id="searchBar" placeholder='Search 1266 AI Tools & 50+ Categories' />
            {query.length > 0 && (
                <div className='suggestion_wrap' >
                    {renderTitleSection()}
                    {renderCategorySection()}
                    {renderNoDataFound()}
                </div>
            )}
        </div>
    )
}

export default SearchBar
