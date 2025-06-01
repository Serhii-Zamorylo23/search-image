import { Component } from "react";
import styled from "styled-components";
import Modal from "./Modal";
const Item=styled.li`
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    &:hover{
        transform: scale(1.03);
        cursor: zoom-in;
    }
`
const Image=styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`
class ImageGalleryItem extends Component {
  state={
    isOpen:false
  }
  openAndCloseModal=()=>{
    this.setState((Prev)=>({
      isOpen:!Prev.isOpen
    }))
  }
  render() {
    const {webformatURL,ModalFormatUrl}=this.props
    return (
      <>
        <Item class="gallery-item">
          <Image src={webformatURL}onClick={this.openAndCloseModal} />
        </Item>
        {this.state.isOpen==true && (
          <Modal url={ModalFormatUrl} onClose={this.openAndCloseModal}/>
        )}
      </>
    );
  }
}
export default ImageGalleryItem
