import React from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 100%;
  padding-top: 7rem;
  @media (max-width: 768px) {
    padding-top: 9rem;
  }
`;

const FlexStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col4Styled = styled.div`
  flex: 0 0 25%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const Col6Styled = styled.div`
  flex: 0 0 50%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 50px;
  padding-left: 15px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    padding-right: 15px;
  }
`;

const MainStyled = styled.div`
  background-image: url(/assets/background.jpg),
    linear-gradient(45deg, #e0f0ff, transparent);
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 100vh;
  height: 500vh;

  @media (max-width: 768px) {
    background-size: auto;
  }
`;

const SectionStyled = styled.div`
  width: 100%;
  padding-left: 5rem;
  padding-right: 5rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const Container = ({ style, children }) => {
  return <ContainerStyled style={style}> {children} </ContainerStyled>;
};

export const Section = ({ style, children }) => {
  return <SectionStyled style={style}> {children} </SectionStyled>;
};

export const Main = ({ style, children }) => {
  return <MainStyled style={style}> {children} </MainStyled>;
};

export const Flex = ({ style, children }) => {
  return <FlexStyled style={style}> {children} </FlexStyled>;
};

export const Col4 = ({ style, children }) => {
  return <Col4Styled style={style}> {children} </Col4Styled>;
};

export const Col6 = ({ style, children }) => {
  return <Col6Styled style={style}> {children} </Col6Styled>;
};
