import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonsDisplay";

// const App = () => {

//   return <div>Latitude: </div>;
// };
// const App = () => {
//};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    //constructor function we can define. in a js class it is the first function to be called anytime an instance of the class is
  }

  state = { lat: null, errorMessage: "" }; //alternate state init

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("my comp updated");
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
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div> Loading!</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
