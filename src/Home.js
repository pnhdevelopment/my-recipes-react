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

    fetch("https://www.my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/media")
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
				          <Link to="/">Home</Link>
				        </li>
				        <li>
				          <Link to="/breakfast">Breakfast</Link>
				        </li>
				        <li>
				          <Link to="/lunch">Lunch</Link>
				        </li>
				        <li>
				          <Link to="/dinner">Dinner</Link>
				        </li>
				        <li>
				          <Link to="/dessert">Dessert</Link>
				        </li>
				        <li>
				          <Link to="/drinks">Drinks</Link>
				        </li>
			    	</ul>
		    	</div>
				
				<div className="image-wrapper">
					{items.map(item => (
						<div className="inner-image-wrapper" key={item.id}>
							<div>
								<img src={item.guid.rendered} />
							</div>
						</div>
					))}
				</div>
	        </React.Fragment>
	      );
	  }
  
  }



}

export default Home;