import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonsDisplay";
import Spinner from "./Spinner";
// const App = () => {

//   return <div>Latitude: </div>;
// };
// const App = () => {
//};

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  //constructor function we can define. in a js class it is the first function to be called anytime an instance of the class is

  // state = { lat: null, errorMessage: "" }; //alternate state init

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("my comp updated");
  }

  renderContent() {
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
    return (
      <div>
        {" "}
        <Spinner message='Please accept loading request' />!
      </div>
    );
  }
  render() {
    // always need a render. must have render method in components.
    return <div className='border red'>{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
