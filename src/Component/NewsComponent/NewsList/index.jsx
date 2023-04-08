import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import data from '../../../config/NewsData'
import featureNews from '../../../config/FeatureNews'
import './style.css'
import Spinner from '../../common/Spinner'
import NoResult from '../../common/NoResult'
import NewItem from '../NewItem'
import arrow from './arrow.png'
import { Link } from 'react-router-dom'
import FeatureSection from '../FeatureSection'


const ITEM_PER_PAGE = 4
export class NewsList extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            currentPage: 1,
            displayData: [],
            hasMore: true,
        }
    }
    async componentDidMount() {
        await new Promise(resolve => setTimeout(resolve, 500));
        this.setState({
            loading: false,
            displayData: data.slice(0, ITEM_PER_PAGE),
        });
    }
    fetchMoreData = () => {
        const { currentPage, displayData } = this.state;
        const nextPage = currentPage + 1;
        const nextData = data.slice(
            (nextPage - 1) * ITEM_PER_PAGE,
            nextPage * ITEM_PER_PAGE,
        );
        setTimeout(() => {
            this.setState({
                currentPage: nextPage,
                displayData: [...displayData, ...nextData],
                hasMore: nextData.length > 0,
            })
        }, 500);
    }

    render() {
        const { displayData, hasMore } = this.state;
        return (
            <div>
                <div className='news_item_main_wrap'>
                    <div className='Navigation'>

                        <h3>
                            <span>

                                <Link className='link' to={'/'}>Home</Link>
                            </span>


                            <span>
                                <img src={arrow} alt="" />
                            </span>

                            <span className='link'>
                                News
                            </span>
                        </h3>
                    </div>
                    <h1 className='newsHead'>Feature News</h1>
                    <div className='feature_box'>

                        {featureNews.map(element => (

                            <FeatureSection title={element.title}
                                image={element.image}
                            />
                        ))}
                    </div>
                    <InfiniteScroll
                        dataLength={displayData.length}
                        next={this.fetchMoreData}
                        hasMore={hasMore}
                        loader={<Spinner />}
                        endMessage={<NoResult />}
                        initialLoad={false}>

                        <div className="all_news_item">


                            {displayData.map(element => (

                                <NewItem title={element.title}

                                    description={element.description.slice(0,210)}
                                    url={element.url}
                                    image={element.image}
                                    date={element.date}
                                />


                            ))}

                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default NewsList
