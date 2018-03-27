import React, { Component } from 'react';
import './styles/Homepage.css';
import SliderWrapper from './components/Slider'

class Homepage extends Component {
  state = {
      films: []
  }

  componentDidMount = () => {
    var self = this;

    fetch('http://www.snagfilms.com/apis/films.json?limit=10').then(function(res) {
      return res.json();
    }).then(function(json) {
      self.setState({ films: json.films.film });
    }).catch(function(err) {
      console.log(err);
    })
  }
  render() {
    return (
      <div style={{ 'height': '72vh' }}>
        {this.state.films.length? <SliderWrapper films={this.state.films} /> : <div className='loading'>Loading...</div>}
      </div>
    );
  }
}

export default Homepage;
