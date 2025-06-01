import { Component } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalStyle=styled.div`
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
`
class Modal extends Component {
  componentDidMount(){
    window.addEventListener("keydown",this.handleKeydown)
  }
  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeydown);
  }
  handleKeydown=(event)=>{
    if(event.key=="Escape"){
      this.props.onClose()
    }
  }
  render() {
    const {onClose}=this.props
    return (
      <Overlay class="overlay" onClick={onClose}>
        <ModalStyle class="modal">
          <img src={this.props.url} alt="" />
        </ModalStyle>
      </Overlay>
    );
  }
}
export default Modal
