import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {setFavorite, deleteFavorite} from '../actions';

import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
    console.log(props);
    const { id, cover, title, year, contentRating, duration, isList, slug, source} = props;

    const handleSetFavorite = () => {
        props.setFavorite({
           id, cover, title, year, contentRating, duration, isList, slug, source
        })
    }

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }
    
    return ( 
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}  />
            <div className="carousel-item__details">
                <div>
                    <Link to ={`/player/${id}`}>
                        <img 
                            className="carousel-item__details--img" 
                            src={playIcon} 
                            alt="Play Icon" 
                        />
                    </Link>
                {
                    isList ?
                        <img className="carousel-item__details--img" onClick= {()=>handleDeleteFavorite(id)} src={removeIcon} alt="Remove Icon" />
                    : 
                        <img className="carousel-item__details--img" onClick= {handleSetFavorite} src={plusIcon} alt="Plus Icon" />
                }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </div>
    )
};

CarouselItem.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    cover: PropTypes.string,
    deteleFavorite: PropTypes.func,
    setFavorite: PropTypes.func,
};

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}    


export default connect(null, mapDispatchToProps)(CarouselItem);