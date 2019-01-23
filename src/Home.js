import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
	      		<div className="menu">
	      			<img src="logo.svg" />
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