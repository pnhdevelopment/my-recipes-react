import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import './Home.css';


class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount () {

  	document.body.style.overflow = "hidden";

    fetch("https://www.my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/media?per_page=16")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  	
  }


  componentWillUnmount(){
  	document.body.style.overflow = "auto";
  }

  handleImageLoaded(event) {
  	event.target.style.opacity = 1;
  }

  
  render() {
	  const { error, isLoaded, items } = this.state;
	    if (error) {
	      return <div>Error: {error.message}</div>;
	    } else if (!isLoaded) {
	      return <div className="loader"></div>;
	    } else {
	      return (
	      	<React.Fragment>
	      		<Helmet>
	                <meta charSet="utf-8" />
	                <title>My Recipes</title>
	                <meta name="description" content="A collection of delicious recipes. Ideal for breakfast, lunch or dinner." />
	                <meta name="author" content="pnhdevelopment" />
	                <meta name="keywords" content="Recipes, Breakfast, Lunch, Dinner, Drinks" />
	            </Helmet>

	      		<div className="menu">	
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 224 74">
						<g>
							<path className="st0" d="M47.5,15.6c-0.2,0.8-0.3,1.5-0.4,1.9c-0.1,0.4-0.4,1.6-1,3.6c-0.6,2.4-1.1,4.9-1.7,7.4
								c-0.6,2.5-1.1,4.9-1.6,7.1c-0.5,2.2-0.8,4.4-0.8,6.6c0,2.2,0,3.5,0,3.9s0,1-0.1,1.7c0,0.5,0.1,1,0.2,1.5c0.1,0.5,0.2,1,0.3,1.4
								c0.1,0.2,0.3,0.5,0.5,0.8c0.2,0.3,0.3,0.7,0.2,1.4c-0.1,0.3-0.2,0.6-0.4,0.7c-0.2,0.2-0.5,0.3-0.9,0.3c-0.9-0.1-1.6-0.4-2.1-0.9
								c-0.5-0.5-0.9-1.1-1.1-1.8c-0.3-0.7-0.5-1.3-0.6-1.8c-0.1-0.4-0.2-1-0.3-1.6c-0.1-0.6-0.2-1.2-0.2-1.8c-0.1-0.6-0.1-2.2-0.1-4.8
								c0-2.6,0.2-5.3,0.7-8c0.5-2.7,0.8-4.9,1.1-6.5c0.3-1.6,0.4-2.6,0.5-2.9c0-0.4,0.1-1.2,0.2-2.4c-0.4,0.4-0.7,0.9-1,1.3
								c-0.8,1-1.8,2.7-3,5.3c-1.3,2.5-2.2,4.5-2.9,5.8c-0.7,1.4-1.6,3.2-2.9,5.5c-1.2,2.3-2.1,3.9-2.6,4.9c-0.4,0.8-0.7,1.4-0.9,2
								c-0.2,0.6-0.4,1.2-0.7,1.9c-0.2,0.7-0.5,1.4-0.7,2.2c-0.3,0.8-0.6,1.3-0.9,1.5c-0.1,0.1-0.3,0.2-0.6,0.3c-0.3,0.1-0.7,0.1-1.3,0.1
								c-0.8-0.2-1.3-0.5-1.6-0.7c-0.3-0.2-0.6-0.5-1-1c-0.3-0.5-0.6-1-0.8-1.8c-0.2-0.7-0.4-1.7-0.5-2.9c-0.1-1.2-0.1-2-0.1-2.2
								c0-0.2,0-0.8,0.1-1.9c0-1.1,0.1-2.5,0.1-4.3c0-7.3-0.1-11.4-0.1-12.2c-0.1-0.9-0.1-1.4-0.1-1.7c0-0.7-0.1-1.4-0.1-2.1
								c0-0.7-0.1-1.4-0.3-2c-0.4,0.4-0.7,1-1,1.6c-1.3,3-2.7,6.3-4.3,9.9c-1.5,3.6-2.9,7-4.1,10.4c-0.2,0.6-0.5,1.3-0.7,1.9
								c-0.2,0.6-0.5,1.3-0.7,1.9c-0.4,1.2-0.7,2.4-1,3.7c-0.3,1.2-0.6,2.5-0.8,3.7c-0.2,1.2-0.5,2-0.8,2.2C4.4,54.9,4.1,55,3.9,55
								c-0.2,0-0.4,0-0.6-0.1c-0.2,0-0.4-0.1-0.6-0.3C2.6,54.5,2.3,54.3,2,54c-0.3-0.3-0.6-0.6-1-1.1c-0.3-0.4-0.6-1-0.7-1.8
								c-0.2-0.8,0.1-2.7,0.7-5.6c0.4-1.2,0.8-2.6,1.4-4c0.6-1.5,1.2-3,1.9-4.6c0.7-1.6,1.4-3.4,2.3-5.4c0.8-1.9,1.7-3.9,2.6-6
								c0.9-2.1,1.7-4,2.5-5.8c0.7-1.8,1.3-3.1,1.7-4c0.4-0.9,1-2.1,1.8-3.7c0.8-1.5,1.3-2.5,1.6-2.9C17,9.1,17.2,9,17.5,8.8
								c0.3-0.1,0.8-0.2,1.4-0.1c0.6,0.1,1,0.2,1.3,0.4c0.3,0.2,0.6,0.5,1.1,0.9c0.4,0.5,0.7,0.9,0.8,1.2c0.1,0.3,0.3,0.9,0.4,1.6
								c0.2,0.7,0.3,1.5,0.5,2.3c0.2,0.8,0.3,1.5,0.3,2c0.1,0.5,0.2,1.1,0.2,1.9c0.1,0.7,0.1,1.4,0.2,2.1c0,0.7,0.1,1.2,0.1,1.7
								c0,0.5,0,0.8,0,0.9v5c0,0.1,0,0.4,0,1c0,0.6-0.1,1.3-0.1,2.1c0,0.8-0.1,1.6-0.1,2.5c0,0.9,0,1.7,0,2.6c1.5-2.1,2.7-3.8,3.6-5.1
								c0.9-1.3,1.6-2.5,2.3-3.6c0.6-1.1,1.2-2,1.6-2.8c0.4-0.7,0.9-1.5,1.4-2.3c0.4-0.7,0.9-1.4,1.4-2.3c0.5-0.8,1-1.6,1.4-2.3
								c0.4-0.7,1-1.7,1.7-3c0.7-1.3,1.2-2.3,1.5-2.8c1.6-3.2,2.7-5.1,3.4-5.6c1-0.4,1.9-0.2,2.9,0.4c0.9,0.6,1.4,1.1,1.6,1.3
								c0.1,0.2,0.3,0.4,0.4,0.6c0.1,0.2,0.3,0.4,0.5,0.7c0.2,0.3,0.3,0.6,0.4,0.9C47.8,11.8,47.8,13.4,47.5,15.6z"/>
							<path className="st0" d="M69.1,32.1c0,0.7,0,1.3-0.1,1.8s-0.1,0.9-0.2,1.4s-0.3,1.5-0.6,3.1c-0.4,1.7-0.6,2.8-0.7,3.3
								c-0.2,1-0.5,2.2-0.9,3.7c-0.4,1.4-0.8,3-1.2,4.7c-0.5,1.9-0.9,3.6-1.4,5.3c-0.4,1.6-0.7,3.1-1,4.4c-0.2,1.3-0.4,2.7-0.6,4.3
								c-0.2,1.6-0.3,2.7-0.4,3.4c0,0.7,0,1.2,0,1.6c0.4,0.5,1,0.6,1.6,0.3c0.6-0.3,1.4-0.8,2.3-1.5c-0.2,2-0.7,3.4-1.2,4.1
								c-0.6,0.7-1.3,1.1-2.1,1.1c-1.3,0.1-2.4-0.5-3.3-1.7c-0.9-1.2-1.4-2.6-1.6-4.3c-0.1-1.4,0-3,0.1-4.9c0.2-1.9,0.4-3.9,0.8-6
								c0.3-2.1,0.7-4.2,1.1-6.4c0.4-2.2,0.8-4.1,1.2-5.9c0.4-1.8,0.7-3.3,1-4.6c0.3-1.3,0.5-2.3,0.7-3c-1.6,2-3.2,3.9-4.8,5.8
								c-1.5,1.9-3,3.6-4.4,4.9c-1.4,1.4-2.7,2.2-4,2.5c-0.6,0.1-1.2,0-1.6-0.3c-0.4-0.3-0.8-0.6-1.1-1.1c-0.3-0.5-0.6-1-0.7-1.5
								C46,46,45.9,45.5,45.9,45c-0.1-0.7,0.1-1.8,0.5-3.2c0.4-1.4,0.9-2.8,1.5-4.2c0.6-1.4,1.3-3.3,2.3-5.7c1-2.4,1.8-3.7,2.6-4.1
								c0.4-0.1,0.7-0.1,1.1-0.1c0.4,0.1,0.7,0.2,1,0.4c0.3,0.2,0.6,0.5,0.8,0.8c0.2,0.3,0.3,0.6,0.3,0.8c0,0.6-0.1,1.2-0.5,1.9
								c-0.4,0.7-0.7,1.3-0.9,1.8c-0.4,1-0.9,2.1-1.4,3.4c-0.5,1.3-1,2.5-1.5,3.7c-0.5,1.2-0.7,2-0.8,2.5L64,27.3c0.8-0.4,1.7-0.3,2.7,0.3
								c0.9,0.6,1.5,1.1,1.7,1.5c0.2,0.4,0.4,0.8,0.5,1.2C69,30.8,69.1,31.4,69.1,32.1z"/>
							<path className="st0" d="M118.2,50.9l-1,0.6c-1,0.5-2.3,0.6-3.7,0.5c-0.2,0-0.4-0.1-0.7-0.2c-0.2-0.1-0.4-0.2-0.6-0.2
								c-2.3-0.9-4.6-2.2-7.1-3.9c-2.4-1.7-4.8-3.7-7.1-5.9c-0.6-0.7-1.5-1.5-2.5-2.6c-1-1.1-2-2.1-3-3.2c-0.3,1-0.6,2.1-0.9,3.1
								c-0.3,1.1-0.6,3-1,5.9c-0.1,0.6-0.2,1.3-0.3,2c-0.1,0.8-0.1,1.6,0,2.5c0.1,0.9,0,1.4-0.3,1.6c-0.3,0.2-0.7,0.3-1,0.3
								c-0.2,0-0.6-0.1-1-0.3c-0.1-0.1-0.3-0.3-0.6-0.5c-0.3-0.3-0.5-0.5-0.6-0.8c-0.2-0.5-0.4-1-0.6-1.7c-0.1-0.6-0.2-1.1-0.2-1.3
								c0-1.5,0.1-3.3,0.4-5.4c0.3-2.1,0.6-4.1,1-6.2c0.4-2.1,0.8-4.1,1.3-5.9s0.8-3.4,1-4.6c0.1-0.4,0.3-0.9,0.6-1.7
								c0.3-0.8,0.5-1.6,0.9-2.6c0.3-0.9,0.7-1.9,1-2.9c0.4-1,0.7-1.9,1-2.7c-0.4-0.1-0.8-0.2-1.2-0.2c-0.4-0.1-0.8-0.2-1.2-0.5
								c-0.3-0.2-0.5-0.5-0.7-0.8c-0.2-0.3-0.3-0.7-0.3-1.2c0-0.5,0-1,0.3-1.5c0.2-0.5,0.4-0.8,0.6-1c0.2-0.2,0.5-0.4,0.8-0.7
								c0.2-0.2,0.7-0.4,1.4-0.7c0.8-0.3,1.4-0.5,1.9-0.6c0.5-0.1,0.9-0.2,1.4-0.2c0.4,0,0.8-0.1,1.2-0.1c0.3,0,0.5,0,0.6,0
								c0.8,0,1.8,0.1,3.2,0.4c1.4,0.3,2.6,0.7,3.8,1.1c1.1,0.5,2.1,1,2.9,1.5c0.8,0.6,1.5,1.2,2.1,1.8c0.6,0.7,1.1,1.4,1.5,2.2
								c0.4,0.8,0.6,1.7,0.7,2.6c0.1,0.9,0,1.6,0,1.8c-0.1,0.4-0.2,0.8-0.5,1.3c-0.2,0.5-0.5,1-0.7,1.4c-0.4,0.6-0.9,1.2-1.4,1.8
								s-0.8,0.9-1.1,1.2c-0.3,0.2-0.6,0.5-0.8,0.8c-0.6,0.5-1.2,1-2,1.7c-0.8,0.6-1.5,1.2-2.2,1.7c-0.6,0.4-1.2,0.8-1.9,1.3
								c-0.7,0.4-1.3,0.9-2,1.3c-0.3,0.2-0.9,0.5-1.7,0.9c-0.9,0.4-1.4,0.7-1.5,0.8c1,1,2.2,2.1,3.4,3.3c1.2,1.2,2.4,2.4,3.7,3.6
								s2.6,2.3,3.9,3.4c1.3,1,2.7,1.9,4.2,2.5c0.5,0.2,1.1,0.5,1.8,0.8c0.7,0.3,1.3,0.6,1.9,0.9c0.6,0.3,1.2,0.6,1.8,0.9
								c0.6,0.3,1.1,0.6,1.5,1c0.3,0.3,0.4,0.6,0.5,0.9C118.7,50.2,118.6,50.6,118.2,50.9z M105.1,12.8c-1.6-0.6-2.8-1-3.7-1.2
								c-0.8-0.2-1.6-0.2-2.2-0.2c-0.3,0-0.5,0-0.6,0c-0.1,0-0.3,0.1-0.5,0.1c0.4,0.7,0.5,1.6,0.6,2.6c0,1.1,0,1.9-0.2,2.3
								c-0.2,1-0.5,2-0.9,3c-0.4,1.1-0.8,1.9-1,2.6c-0.3,0.7-0.6,1.5-0.8,2.2c-0.3,0.8-0.5,1.5-0.8,2.2c0.2-0.1,0.5-0.2,0.7-0.4
								c0.2-0.1,0.4-0.2,0.5-0.3c1.5-1,2.8-1.8,4-2.5c1.1-0.7,2.2-1.5,3.2-2.3c1-0.8,2.1-2.1,3.2-3.8C107.9,15.5,107.3,14.1,105.1,12.8z"
								/>
							<path className="st0" d="M135.1,43.5c-0.5,1-1.1,1.9-1.8,2.8c-0.7,0.9-1.5,1.7-2.4,2.4c-0.9,0.7-1.7,1.3-2.2,1.6
								c-0.5,0.3-0.9,0.6-1.2,0.7c-0.3,0.1-0.8,0.3-1.7,0.6c-0.9,0.3-1.6,0.4-2,0.4c-0.4,0-0.8,0-1,0c-0.3,0-0.6-0.1-0.8-0.1
								c-0.2,0-0.6-0.2-1.1-0.4c-0.8-0.3-1.4-0.6-1.8-1c-0.4-0.3-0.9-0.8-1.5-1.4c-0.6-0.8-1.1-1.5-1.3-2.2c-0.2-0.6-0.4-1.4-0.5-2.2
								c-0.1-1.3-0.1-2.3,0-3c0.1-0.7,0.3-1.3,0.4-1.8c0.1-0.5,0.3-1.4,0.7-2.5c0.4-1.1,0.8-2.2,1.2-3.1c0.6-1.3,1.4-2.7,2.5-4.3
								s2.1-2.7,3-3.4c0.9-0.7,1.6-1.1,2.2-1.2c0.5-0.1,1,0,1.5,0.1c0.5,0.2,1.1,0.6,1.7,1.2c0.6,0.6,1.2,1.8,1.7,3.4
								c0.2,1,0.3,1.9,0.2,2.6c0,0.7-0.1,1.2-0.3,1.7c-0.2,0.5-0.3,0.9-0.5,1.3c-0.6,1-1.5,2.3-2.8,3.8c-1.2,1.5-2.3,2.7-3.2,3.4
								c-0.9,0.7-1.5,1.3-1.9,1.6c-0.4,0.3-0.8,0.7-1.1,1.1c0.1,0.2,0.3,0.5,0.6,0.9c0.3,0.3,0.7,0.6,1.1,0.8c0.3,0.1,0.6,0.2,0.9,0.2
								c0.3,0,0.6,0.1,0.8,0.1c0.3,0,0.6,0,0.9-0.1c0.3,0,0.7-0.1,1.2-0.2c0.8-0.2,2.1-0.8,3.8-1.7c1.7-0.9,2.9-1.5,3.6-1.9
								C134.5,43.7,134.8,43.6,135.1,43.5z M125.8,31.5c-0.8,0.7-1.4,1.4-1.8,2s-1,1.5-1.7,2.8c-0.7,1.3-1.3,2.6-1.7,3.9
								c0.5-0.5,1-1.1,1.4-1.6c0.4-0.6,0.9-1.1,1.3-1.7c0.4-0.6,0.9-1.3,1.5-2.2C125.4,33.8,125.7,32.7,125.8,31.5z"/>
							<path className="st0" d="M153.9,40.9c-0.1,0.3-0.2,0.6-0.4,0.8c-0.2,0.3-0.4,0.5-0.6,0.8c-1.2,1.7-1.9,2.7-2.2,3
								c-0.8,0.9-1.5,1.6-2.3,2.2c-0.8,0.6-1.8,1.3-3.1,2c-1.2,0.8-2.1,1.2-2.7,1.4s-1.1,0.3-1.7,0.4c-0.6,0.1-1,0.1-1.3,0.1
								c-0.8,0-1.6-0.2-2.3-0.6c-0.7-0.4-1.3-0.8-1.9-1.4c-0.5-0.6-1-1.2-1.3-1.9c-0.3-0.7-0.5-1.4-0.6-2c0-0.2,0-0.5,0-0.8
								c0-0.3,0-0.5,0-0.7c0-0.9,0.1-2.1,0.4-3.6c0.3-1.5,0.6-2.9,1.1-4s0.9-2.2,1.4-3.2c0.5-1,1.2-2,2-3s1.5-1.8,2.2-2.4
								c0.6-0.6,1.2-1,1.7-1.3c0.5-0.3,0.8-0.4,1.1-0.4c0.7-0.1,1.2,0,1.6,0.1c0.4,0.2,0.7,0.3,0.9,0.5c0.3,0.2,0.7,0.5,1.3,1
								c0.5,0.4,0.9,0.9,1.1,1.4c0.2,0.3,0.3,0.7,0.4,1.2s0.2,0.8,0.2,1.1c0,0.4,0,0.7,0,1c0,0.3-0.1,0.7-0.2,1.2
								c-0.1,0.5-0.2,0.9-0.4,1.3c-0.1,0.4-0.4,0.7-0.6,0.9c-0.3,0.2-0.6,0.3-1.1,0.3c-0.5,0-0.9-0.1-1.2-0.3c-0.3-0.2-0.6-0.5-0.8-0.9
								c-0.1-0.3-0.2-0.6-0.3-1.1c-0.1-0.4-0.1-0.8,0-1.3c-1.5,1.2-2.7,2.6-3.5,4.1c-0.9,1.6-1.6,3.1-2.1,4.7s-0.9,2.7-0.9,3.3
								c-0.1,0.6-0.1,1-0.1,1.2c0.2,0.7,0.5,1.1,0.8,1.2c0.4,0.1,0.6,0.1,0.8,0.1c0.4,0,1-0.2,1.6-0.4c0.6-0.2,1.1-0.4,1.6-0.6
								c1.1-0.4,2.2-0.9,3.4-1.4c1.2-0.5,2.4-1.1,3.8-1.9c0.4-0.2,1-0.5,1.8-1C152.4,41.6,153.1,41.2,153.9,40.9z"/>
							<path className="st0" d="M166.3,45.3c-0.1,1.6-0.6,2.9-1.3,4c-0.8,1.1-1.8,1.8-3,2.2c-1.3,0.4-2.5,0.5-3.7,0.3c-1.4-0.3-2.4-0.7-3-1.1
								c-0.6-0.4-1.2-1.1-1.7-1.9c-0.5-0.8-0.9-1.7-1.1-2.6s-0.3-2.1-0.3-3.7c0.2-2.2,0.6-4.3,1.2-6.2c0.6-2,1-3.3,1.2-4.1
								c0.3-0.8,0.5-1.5,0.8-2c0.3-0.6,0.5-0.9,0.8-1.1c0.2-0.2,0.4-0.3,0.7-0.3c0.2,0,0.5-0.1,0.7-0.1c0.8,0,1.6,0.3,2.6,1
								c1,0.7,1.4,1.4,1.3,2.1c-0.2,0.9-0.4,1.5-0.5,1.8c-0.1,0.3-0.4,1.1-0.8,2.5c-0.4,1.4-0.9,3-1.4,4.8c-0.5,1.8-0.8,3.3-0.8,4.5
								c0.2,2.7,1.4,3.8,3.4,3.1C163.5,47.8,165.1,46.8,166.3,45.3z M164.1,20.6c0,1,0,1.6-0.1,1.9c-0.1,0.3-0.2,0.6-0.3,0.9
								c-0.2,0.3-0.6,0.4-1.3,0.4c-0.4,0-0.9,0-1.3-0.2c-0.4-0.2-0.7-0.4-0.9-0.5c-0.2-0.1-0.4-0.3-0.7-0.5c-0.3-0.2-0.5-0.6-0.8-1.3
								c-0.3-0.6-0.5-1.1-0.7-1.6c-0.1-0.3-0.2-0.7-0.1-1.1c0-0.4,0.2-0.7,0.4-0.8c0.3-0.1,0.6-0.2,1-0.3c0.4-0.1,0.7-0.1,1.1-0.2
								c0.3-0.1,0.7-0.2,1-0.2c0.3-0.1,0.7-0.1,1,0c0.4,0.1,0.6,0.3,0.8,0.5c0.1,0.2,0.3,0.4,0.4,0.6c0.1,0.2,0.2,0.5,0.3,0.8
								C163.9,19.3,164,19.9,164.1,20.6z"/>
							<path className="st0" d="M185.7,35.4c0,1.2-0.3,2.6-0.8,4.1c-0.5,1.5-1.2,2.9-2.1,4.3c-0.9,1.4-1.9,2.7-3,3.9c-1.1,1.2-2.3,2.1-3.4,2.8
								c-0.4,0.2-1,0.4-1.7,0.3c-0.7,0-1.6-0.4-2.4-1.2c-0.9-0.8-1.2-1.9-1.1-3.3c0.2-0.6,0.5-1,0.9-1.2c0.5-0.3,0.9-0.5,1.2-0.8
								c0.3-0.2,0.7-0.5,1-0.8c1.6-1.4,2.8-3,3.6-4.6c0.8-1.7,1.4-3.2,1.6-4.6c-1.2,0-2.4,0.5-3.8,1.4c-0.6,0.5-1.3,1.2-2.2,2.2
								c-0.8,1-1.6,2.1-2.3,3.4c-0.2,0.4-0.4,1-0.7,1.8c-0.3,0.8-0.5,1.6-0.8,2.6c-0.3,0.9-0.6,1.9-0.8,2.9c-0.3,1-0.6,2.3-0.9,3.9
								s-0.7,3.1-1,4.3c-0.3,1.3-0.6,2.5-0.8,3.6c-0.2,1.1-0.4,2.3-0.7,3.5c0,0.3-0.1,0.7-0.3,1.2c-0.1,0.5-0.5,0.9-1.1,1
								c-1,0.1-1.8-0.1-2.3-0.6c-0.5-0.5-0.8-1-1-1.6c-0.1-0.5-0.2-1.2-0.1-2c0.1-0.8,0.2-1.6,0.4-2.5c0.2-0.9,0.3-1.5,0.4-1.8
								c0.6-1.9,1.5-5,2.6-9.3c1.1-4.3,1.9-7.6,2.4-9.9c0.5-2.3,0.9-4.1,1.2-5.3c0.3-1.3,0.6-2.7,1-4c0.3-1.4,0.6-2.6,0.9-3.8
								c0.3-1.1,0.5-2.3,0.8-3.6c0.3-1.3,0.8-1.9,1.4-2c0.8,0.1,1.3,0.3,1.6,0.7c0.3,0.4,0.6,0.8,0.7,1.1c0.2,0.4,0.3,0.9,0.4,1.7
								c0.1,0.8,0,1.9-0.1,3.2c-0.1,1.3-0.4,2.6-0.7,3.8c-0.3,1.2-0.6,2.5-0.8,3.8c0.2-0.3,0.5-0.7,0.9-1.3c0.4-0.5,0.9-1,1.4-1.5
								c0.5-0.5,1.1-0.9,1.8-1.3c0.7-0.4,1.2-0.6,1.7-0.6c1.6-0.1,3.1,0.4,4.3,1.3C184.5,31.5,185.3,33.1,185.7,35.4z"/>
							<path className="st0" d="M206.3,43.5c-0.5,1-1.1,1.9-1.8,2.8c-0.7,0.9-1.5,1.7-2.4,2.4c-0.9,0.7-1.7,1.3-2.2,1.6
								c-0.5,0.3-0.9,0.6-1.2,0.7c-0.3,0.1-0.8,0.3-1.7,0.6c-0.9,0.3-1.6,0.4-2,0.4c-0.4,0-0.8,0-1,0c-0.3,0-0.6-0.1-0.8-0.1
								c-0.2,0-0.6-0.2-1.1-0.4c-0.8-0.3-1.4-0.6-1.8-1c-0.4-0.3-0.9-0.8-1.5-1.4c-0.6-0.8-1.1-1.5-1.3-2.2c-0.2-0.6-0.4-1.4-0.5-2.2
								c-0.1-1.3-0.1-2.3,0-3c0.1-0.7,0.3-1.3,0.4-1.8c0.1-0.5,0.3-1.4,0.7-2.5c0.4-1.1,0.8-2.2,1.2-3.1c0.6-1.3,1.4-2.7,2.5-4.3
								s2.1-2.7,3-3.4c0.9-0.7,1.6-1.1,2.2-1.2c0.5-0.1,1,0,1.5,0.1c0.5,0.2,1.1,0.6,1.7,1.2c0.6,0.6,1.2,1.8,1.7,3.4
								c0.2,1,0.3,1.9,0.2,2.6c0,0.7-0.1,1.2-0.3,1.7c-0.2,0.5-0.3,0.9-0.5,1.3c-0.6,1-1.5,2.3-2.8,3.8c-1.2,1.5-2.3,2.7-3.2,3.4
								c-0.9,0.7-1.5,1.3-1.9,1.6c-0.4,0.3-0.8,0.7-1.1,1.1c0.1,0.2,0.3,0.5,0.6,0.9c0.3,0.3,0.7,0.6,1.1,0.8c0.3,0.1,0.6,0.2,0.9,0.2
								c0.3,0,0.6,0.1,0.8,0.1c0.3,0,0.6,0,0.9-0.1c0.3,0,0.7-0.1,1.2-0.2c0.8-0.2,2.1-0.8,3.8-1.7c1.7-0.9,2.9-1.5,3.6-1.9
								C205.8,43.7,206.1,43.6,206.3,43.5z M197,31.5c-0.8,0.7-1.4,1.4-1.8,2s-1,1.5-1.7,2.8c-0.7,1.3-1.3,2.6-1.7,3.9
								c0.5-0.5,1-1.1,1.4-1.6c0.4-0.6,0.9-1.1,1.3-1.7c0.4-0.6,0.9-1.3,1.5-2.2C196.6,33.8,196.9,32.7,197,31.5z"/>
							<path className="st0" d="M222.2,27.2c0.2,1.2,0.3,2.2,0.2,3.1c-0.1,0.9-0.3,1.6-0.7,2.1c-0.4,0.5-0.9,0.8-1.5,0.7
								c-0.4,0-0.7-0.3-1.1-0.9c-0.4-0.6-0.7-1-1-1.3c-0.3-0.3-0.5-0.1-0.5,0.5c-0.1,2.8-0.1,5.4,0,7.7c0.1,2.3-0.1,4.6-0.4,6.9
								c-0.1,0.6-0.2,1.3-0.4,2.2c-0.2,0.9-0.4,1.8-0.8,2.6s-0.8,1.6-1.3,2.2c-0.6,0.6-1.3,0.9-2.1,0.9c-0.2,0-0.6-0.1-1.1-0.1
								c-0.5-0.1-0.9-0.3-1.3-0.5c-0.3-0.2-0.7-0.4-0.9-0.6c-0.3-0.2-0.6-0.4-0.8-0.7c-0.3-0.2-0.7-0.7-1.2-1.4c-0.5-0.7-1-1.4-1.5-2.2
								c-0.5-0.8-0.8-1.6-1.1-2.5c-0.3-0.8-0.5-1.6-0.5-2.2c-0.1-0.6,0-1.2,0.1-1.9c0.2-0.7,0.5-1.3,1.1-1.8c0.4-0.3,0.6-0.2,0.6,0.4
								c-0.1,0.5,0.1,1.6,0.4,3.1c0.3,1.6,0.8,2.8,1.5,3.8c0.7,0.9,1.3,1.6,1.9,2c0.6,0.3,0.9,0.2,1.2-0.4c0.2-0.6,0.4-1.3,0.6-2
								c0.2-1,0.4-2,0.5-3.1s0.3-3.1,0.3-6c0-2.8,0-5.5,0-8c0-2.5,0.1-4.3,0.5-5.3c0.3-1,0.8-1.8,1.3-2.2c0.5-0.4,1.1-0.6,1.9-0.6
								c0.8,0,1.7,0.4,2.7,1c1,0.7,1.8,1.4,2.3,2.1C221.6,25.7,222,26.4,222.2,27.2z"/>
						</g>
					</svg>

			      	<ul>
				        <li>
				          <Link to="/breakfast/2">Breakfast</Link>
				        </li>
				        <li>
				          <Link to="/lunch/3">Lunch</Link>
				        </li>
				        <li>
				          <Link to="/dinner/4">Dinner</Link>
				        </li>
				        <li>
				          <Link to="/dessert/6">Dessert</Link>
				        </li>
				        <li>
				          <Link to="/drinks/5">Drinks</Link>
				        </li>
			    	</ul>
		    	</div>
				
				<div className="image-wrapper m-3">
					{items.map(item => (
						<div className="inner-image-wrapper" key={item.id}>
							<img
								src={item.source_url}
								onLoad={this.handleImageLoaded}
								alt={item.title.rendered}
							/>
						</div>
					))}
				</div>
	        </React.Fragment>
	      );
	  }
  
  }



}

export default Home;