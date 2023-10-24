// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import imageCarouselOne from '../../assets/img-Carrusel/imagenCarousel1ajustada.png'
import imageCarouselTwoThreee from '../../assets/img-Carrusel/imagenCarrusel2y3.png'
export default class CarouselTwo extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: 1,
      content: <img src={imageCarouselOne} alt="1" />
    },
    {
      key: 2,
      content: <img src={imageCarouselTwoThreee} alt="2" />
    },
    {
      key: 3,
      content: <img src={imageCarouselTwoThreee} alt="3" />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
        <div style={{ width: "80%", height: "700px", margin: "0 auto"}}>
            <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
            />
            <div
            style={{
                margin: "0 auto",
                marginTop: "1rem",
                width: "800px",
                display: "flex",
                justifyContent: "space-around",
            }}
            ></div>
        </div>
        )
    }
}
