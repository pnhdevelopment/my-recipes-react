import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Meals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  
  componentDidMount () {

    const URL = "https://my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&categories=" + this.props.match.params.id;


    fetch(URL)
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


  handleImageLoaded(event) {
    event.target.style.opacity = 1;
  }

  	
  componentWillReceiveProps(){
  	console.log(this.props.match.params.meal);
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
          <title>{items[0]['_embedded']['wp:term'][0][0]['name'] + " - My Recipes"} </title>
          <meta name="robots" content="noindex" />
        </Helmet>

        <div className="image-wrapper m-3">
          {items.map(item => (
            <Link to={`${this.props.match.params.id}/${item.slug}`} key={item.id} >
              <div className="inner-image-wrapper" >
                <div>
                  <img
                    src={item["_embedded"]["wp:featuredmedia"][0]["source_url"]}
                    alt={item.title.rendered}
                    onLoad={this.handleImageLoaded}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </React.Fragment>
      );
    }

  }


}

export default Meals;