
import './style.css'


import React, { Component } from 'react'
// import data from '../../../config/data';
import InfiniteScroll from 'react-infinite-scroll-component';
import ToolBoxData from '../../ToolBoxData';
import './style.css'
import Spinner from '../../common/Spinner';
import NoResult from '../../common/NoResult';


const ITEM_PER_PAGE = 6;

export class ToolListCommon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            currentPage: 1,
            displayData: [],
            hasMore: true,
        };
    }
    
    async componentDidMount() {
        await new Promise(resolve => setTimeout(resolve, 500));
        this.setState({
            loading: false,
            displayData: this.props.data.slice(0, ITEM_PER_PAGE),
        });
    }
    
    fetchMoreData = () => {
        const { currentPage, displayData } = this.state;
        const nextPage = currentPage + 1;
        const {data}=this.props;
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
                <div className='tool_item_main_wrap'>
                    <InfiniteScroll
                        dataLength={displayData.length}
                        next={this.fetchMoreData}
                        hasMore={hasMore}
                        loader={<Spinner/>}
                        endMessage={<NoResult/>}
                        initialLoad={false}
                    >
                        <div className="all_item_list">
                            {displayData.map(element => (
                                <ToolBoxData key={element.id}
                                title={element.title} 
                                description={element.description.slice(0, 120)}
                                image={element.image} 
                                category={element.category[0]} 
                                category1={element.category[1]} 
                                plan={element.plan} 
                                slug={element.slug}
                                link={element.link}
                                />
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default ToolListCommon
