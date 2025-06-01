import Button from "./Components/Button";
import ImageGallery from "./Components/ImageGallery";
import Loader from "./Components/Loader";
import SearchBar from "./Components/Searchbar";
import { Component } from "react";
class App extends Component {
  state = {
    value: "",
    per_page: 12,
    isLoad: true,
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState(()=>({
        isLoad:false
      }))
    }, 1000);
  }
  texFromInput = (valueFromInput) => {
    this.setState({
      value: valueFromInput,
    });
  };
  clickOnButton = () => {
    this.setState((prevState) => ({
      per_page: prevState.per_page + 12,
    }));
  };
  render() {
    console.log(this.state.isLoad)
    return (
      <>
        <SearchBar textFromInput={this.texFromInput} />
        <ImageGallery
          inputText={this.state.value}
          per_page={this.state.per_page}
        />
        {this.state.isLoad== false ?<Button handleClick={this.clickOnButton} /> : null}
        {this.state.isLoad && <Loader />}
      </>
    );
  }
}

export default App;
