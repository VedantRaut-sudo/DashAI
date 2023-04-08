import React, { useEffect, useState } from 'react'
import ALL from '../../../config/BrowsePageData/AllCategory'
import { Link } from 'react-router-dom';
import './style.css'
const SearchBar2 = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestion] = useState([]);
  useEffect(() => {
    setSuggestion(ALL);
  }, [])

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value)
    const filterData = value
      ? ALL.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      ) : [];
      setSuggestion(filterData)
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
            <h2 className='tool_suggestion_heading'>Category</h2>
            <ul>
                {titleSuggestion.slice(0, 5).map((item) => (
                    <li className='tool_suggestion_list' key={item.title}>
                        <p>
                            <Link target='_blank' className='link-suggestions'  to={`/category/${item.slug}`}>

                                {item.title}
                            </Link>
                        </p>

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
              <p>No Result</p>
          </div>
      )
  }
}
  return (
    <div className='search_wrapper'>
      <input value={query} onChange={handleInputChange} className='browser_seachBar' placeholder='Search by Category' type="text" />
      {/* <button className='search_btn'>Search</button> */}
      {query.length > 0 && (
                <div className='suggestion_wrap width' >
                    {renderTitleSection()}
                    {renderNoDataFound()}
                </div>
            )}
    </div>
  )
}

export default SearchBar2
