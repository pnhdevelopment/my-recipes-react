import React, { Fragment } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import './Meal.css';


class Meal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    
  }
  
  componentDidMount () {

    URL = "https://my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&slug=" + this.props.match.params.mealName;

    fetch(URL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result[0]
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


  handleImageLoaded(event){
    event.target.style.opacity = 1;
  }

  componentWillReceiveProps(){
  	console.log(this.props.match.params.mealName);


  }

  render() {

    const { error, isLoaded, item } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loader"></div>;
    } else {
      return (
        <React.Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{item.title.rendered + ' - My Recipes'}</title>
            <meta name="description" content={item.title.rendered} />
            <meta name="author" content="pnhdevelopment" />
            <meta name="keywords" content="Recipes, Breakfast, Lunch, Dinner, Drinks" />
          </Helmet>

          <div className="container">
            <div className="col-8 m-auto">

              <h1 className="text-center">{ item.title.rendered }</h1>

              <div className="meal-wrapper">
                <img
                  src={ item["_embedded"]["wp:featuredmedia"][0]["source_url"] }
                  onLoad={this.handleImageLoaded}
                  alt={item.title.rendered}
                />
              </div>
              
              <div dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>

            </div>
          </div>
        </React.Fragment>
      );
    }
    

  }


}

export default Meal;