import React, { Component } from 'react';
import Slider from 'react-slick'
import { Link } from 'react-router-dom';
import '../styles/Slider.css';

class SliderWrapper extends Component {
  render() {
    const left = <img src="https://res.cloudinary.com/deby8qtea/image/upload/v1522109105/left_laqsqh.png" alt="left arrow"/>;
    const right = <img src="https://res.cloudinary.com/deby8qtea/image/upload/v1522109105/right_jlszuc.png" alt="right arrow"/>;
    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      nextArrow: right,
      prevArrow: left
    };

    return (
      <Slider className='films-wrapper' {...settings}>
        {this.props.films.map((el, i) => {
          return (
            <div key={i}>
              {el.hasOwnProperty('relatedFilms')?
                <Link to={{
                    pathname: `/films/title/${el.title.toLowerCase().split(' ').join('-')}`,
                    state: {
                      iframe: el.renditions,
                      title: el.title,
                      min: el.durationMinutes,
                      sec: el.durationSeconds,
                      rating: el.parentalRating,
                      recommended: el.relatedFilms.relatedFilm
                    }
                  }}>
                  <figure>
                    <div className='card'>
                      <img src={el.images.image[0].src} alt={el.title} />
                      <i className="fa fa-play"></i>
                    </div>
                    <figcaption>{el.title}</figcaption>
                  </figure>
                </Link>
                :
                  <figure>
                    <div className='card'>
                      <img src={el.images.image[0].src} alt={el.title} />
                      <i className="fa fa-play"></i>
                    </div>
                    <figcaption>{el.title}</figcaption>
                  </figure>
              }
              </div>
            )
          })}
      </Slider>
    );
  }
}

export default SliderWrapper;
