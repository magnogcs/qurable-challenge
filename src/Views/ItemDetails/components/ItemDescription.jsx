import React from "react";
import styled from "styled-components";

const ItemDescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  h1 {
    font-family: "Arameza";
    font-weight: normal;
    font-size: 5rem;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const ItemDescription = ({ children }) => {
  return <ItemDescriptionStyled>{children}</ItemDescriptionStyled>;
};
