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
    const initialState = useInitialState(API);
    return  initialState.length === 0 ? <h1>Loading...</h1> : (
        <div className='App'>
            <Header />
            <Search />

            {initialState.mylist.length > 0 &&
                <Categories title='Mi Lista'>
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }
            

            <Categories title='Tendencias'>
                <Carousel>
                    {
                        initialState.trends.map(item=>  
                            <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>

            <Categories title='Originales'>
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Footer/>
        </div>
    );
}
export default App;