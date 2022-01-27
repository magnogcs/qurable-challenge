import React from "react";
import styled from "styled-components";

const ImageCreators = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    box-shadow: 2px 2px 13px 0px rgb(108 108 108 / 62%);
    border-radius: 50px;
    position: relative;
    z-index: 1;
    left: 2px;
    margin-left: -12px;
  }
`;
const Creators = ({ creator }) => {
  return (
    <ImageCreators>
      <img alt={creator?.creator_name} src={creator?.creator_image}></img>
    </ImageCreators>
  );
};

export default Creators;
