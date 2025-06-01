import { Component } from "react";
import styled from "styled-components";
import ImageGallery from "./ImageGallery";
const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url("https://www.svgrepo.com/show/522443/search.svg");
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
const ButtionSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

class SearchBar extends Component {
  state={
    value:""
  }
   textImage = (event) => {  
    event.preventDefault();
    this.props.textFromInput(event.target[1].value)
  };
  render() {
    return (
      <>
        <Header class="searchbar">
          <Form class="form" onSubmit={this.textImage}>
            <Button type="submit" className="button">
              <ButtionSpan className="button-label">Search</ButtionSpan>
            </Button>
            <Input
              className="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </Form>
        </Header>
      </>
    );
  }
}
export default SearchBar;
