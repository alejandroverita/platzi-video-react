import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Carousel from '../Components/Carousel';
import CarouselItem from '../Components/CarouselItem';

/* Hooks */
import useInitialState from '../Hooks/useInitialState';

/* Styles */
import '../assets/styles/App.scss';


const Home = ({myList, trends, originals})=>{

    return(
        <React.Fragment>
            <Search />

            <Categories title='Mi lista'>
                <Carousel>
                    {myList?.map((item) => {
                    return (
                        <CarouselItem key={item.id} {...item} />
                    );
                    })}
                </Carousel>
            </Categories>

            <Categories title='Originals'>
                <Carousel>
                    {originals?.map((item) => {
                    return (
                        <CarouselItem key={item.id} {...item} />
                    );
                    })}
                </Carousel>
            </Categories>

            <Categories title='Trends'>
                <Carousel>
                    {trends?.map((item) => {
                    return (
                        <CarouselItem key={item.id} {...item} />
                    );
                    })}
                </Carousel>
            </Categories>
        </React.Fragment>
    );
}

const mapStateToProps = state =>{
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};


export default connect(mapStateToProps, null)(Home);



/* <Search/>
            {myList && Object.keys(myList).map(categorie => {
                if (myList[categorie].length) {
                    return (
                        <Categories
                            title={categorie}
                            key={categorie}
                        >
                            <Carousel>
                                {myList[categorie].map(video => {
                                    return (
                                        <CarouselItem 
                                            cover={video.cover}
                                            alt={video.title}
                                            key={video.id}
                                            year={video.year}
                                            title={video.title}
                                            content={video.contentRating}
                                            duration={video.duration}
                                        />
                                    )
                                })}
                            </Carousel>
                        </Categories>
                    )
                }
                return null
            })} */