import React, { Component } from 'react';
import SliderWrapper from './components/Slider';
import './styles/Details.css';

class Details extends Component {
  render() {
    const { iframe, title, sec, min, rating, recommended } = this.props.location.state;

    return (
      <div>
        <div className='header'>
          <div className='sub-header'>
            <div className='description'>
              <span className='title'>{title}</span>
              <span className='info'>{min}MINS | {sec}SECS</span>
              <span className='rating'>{rating}</span>
            </div>
          </div>
        </div>
        <div className='video' dangerouslySetInnerHTML={{ __html: iframe.rendition[0].url}} />
        <div className='recommendations'>
          <div className='recommendations-title'>Recommended for you</div>
          {recommended? <SliderWrapper films={recommended} /> : <span>Loading...</span>}
        </div>
      </div>
    )
  }
}

export default Details;
