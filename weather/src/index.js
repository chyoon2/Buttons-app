import React from "react";
import ReactDOM from "react-dom";

// const App = () => {

//   return <div>Latitude: </div>;
// };
// const App = () => {
//};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
    //constructor function we can define. in a js class it is the first function to be called anytime an instance of the class is
  }
  render() {
    // always need a render. must have render method in components.

    // <div>
    //   Latitude: {this.state.lat}
    //   <br />
    //   Error: {this.state.errorMessage}
    // </div>
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat} </div>;
    }
    return <div> Loading!</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
