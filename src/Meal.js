import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";


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
      console.log(this.props.match.params.mealName);

    URL = 'http://bibletopia.net/wp-json/wp/v2/posts?_embed&slug=' + this.props.match.params.mealName;

    console.log(URL)

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
        <div className="col-8 m-auto text-center">
            <h1>{ item.title.rendered }</h1>
            <img src={ item["_embedded"]["wp:featuredmedia"][0]["source_url"] } />
            <div dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
        </div>
      );
    }
    
    

  }


}

export default Meal;