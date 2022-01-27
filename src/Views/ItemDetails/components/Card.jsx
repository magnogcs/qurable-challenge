import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  @media (min-width: 768px) {
    padding: 1rem 2rem 1rem 2rem;
    margin-bottom: 30px;
  }
  border-radius: 30px;
  background-color: #ffffff;
  width: 100%;
  box-shadow: 2px 3px 14px 0px rgb(155 155 155 / 28%);

  opacity: 1;
  span {
    color: #c3c3c3;
  }
  h4,
  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const CardImageStyled = styled.div`
  img {
    padding: 2rem 2rem 2rem 2rem;
    width: 100%;
  }
`;

export const Card = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};

export const CardImage = ({ children }) => {
  return <CardImageStyled>{children}</CardImageStyled>;
};
