import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import styled from "styled-components";
import Modal from "./Modal";
const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
`;

class ImageGallery extends Component {
  constructor(props) {
    const key = "41033435-ac800317f7cb62c730c675650";
    super(props);
    this.state = {
      url: [],
      key:key
    };
  }
  componentDidUpdate() {
    fetch(
      `https://pixabay.com/api/?q=${this.props.inputText}&page=1&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=${this.props.per_page}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ url: data.hits });
      });
  }
  render() {
    return (
      <>
        <List className="gallery">
          {this.state.url.map((img) => {
            return (
              <>
                <ImageGalleryItem webformatURL={img.webformatURL} ModalFormatUrl={img.largeImageURL}/>
              </>
            );
          })}
        </List>
      </>
    );
  }
}
export default ImageGallery;
