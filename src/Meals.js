import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

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

    fetch("http://bibletopia.net/wp-json/wp/v2/media")
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

  	



  componentWillReceiveProps(){
  	console.log(this.props.match.params.meal);
  }

  render() {
    
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div class="loader"></div>;
    } else {
      return (
        <div className="image-wrapper">
          {items.map(item => (
            <Link to="/dinner/my-slug">
              <div className="inner-image-wrapper" key={item.id}>
                <div>
                  <img src={item.guid.rendered} alt="" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
    }

  }


}

export default Meals;