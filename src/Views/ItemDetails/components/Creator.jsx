import React from "react";
import styled from "styled-components";

const CreatorStyled = styled.div`
  margin-top: 10%;

  .creator {
    display: flex;
    align-items: center;
    & img {
      margin-right: 2rem;
      box-shadow: 2px 2px 13px 0px rgb(108 108 108 / 62%);
      border-radius: 100px;
      width: 100px;
    }
    & h4,
    h5 {
      margin-bottom: 0;
      margin-top: 0;
    }
    & h5 {
      color: #898989;
    }
  }
`;

const Creator = ({ creator }) => {
  return (
    <CreatorStyled>
      <div className="creator">
        <img alt={creator?.creator_name} src={creator?.creator_image}></img>
        <div>
          <h5>Creator</h5>
          <h4>{creator?.creator_name}</h4>
        </div>
      </div>
    </CreatorStyled>
  );
};

export default Creator;
