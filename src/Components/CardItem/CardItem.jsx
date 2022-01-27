import React from "react";
import styled from "styled-components";
import Favorite from "../Favorite";
import Creators from "../Creators";
import { Link } from "react-router-dom";

const Card = styled.div`
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 30px;
  background-color: #ffffff;
  width: 100%;
  box-shadow: 2px 3px 14px 0px rgb(155 155 155 / 28%);
  margin-bottom: 30px;
  opacity: 1;
  span {
    color: #c3c3c3;
  }
  h4,
  h2 {
    margin-top: 0;
    margin-bottom: 0;
    & span {
      font-weight: 300;
    }
  }
`;

const CardBody = styled.div`
  &:hover {
    opacity: 0.6;
    transition: 0.5s;
  }
`;

const CardImage = styled.div`
  img {
    width: 100%;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const CardItem = ({ children, data }) => {
  return (
    <Card>
      <CardBody>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={"/items/" + data.id}
        >
          <CardImage>
            <img alt={data.name} src={data.image}></img>
          </CardImage>
          <h4>#{data.id}</h4>
          <h2>
            {data.price} <span>List Value</span>{" "}
          </h2>
        </Link>
      </CardBody>
      <CardFooter>
        <Creators creator={data?.creator} />
        <Favorite />
      </CardFooter>
      <h1>{children}</h1>
    </Card>
  );
};

export default CardItem;
