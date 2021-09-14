import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Carousel from '../Components/Carousel';
import CarouselItem from '../Components/CarouselItem';
import Footer from '../Components/Footer';

/* Hooks */
import useInitialState from '../Hooks/useInitialState';

/* Styles */
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState'

const App = ()=>{
    const videos = useInitialState(API)

    return (
        <div>
            <Header/>
            <Search/>
            {videos && Object.keys(videos).map(categorie => {
                if (videos[categorie].length) {
                    return (
                        <Categories
                            title={categorie}
                            key={categorie}
                        >
                            <Carousel>
                                {videos[categorie].map(video => {
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
            })}
            <Footer/>
        </div>
    )
}
export default App;