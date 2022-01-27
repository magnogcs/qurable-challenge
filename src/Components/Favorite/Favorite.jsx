import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FavoriteLayout = styled.div`
  border: 1px solid #c1c1c1;
  border-radius: 50px;
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
  display: flex;
  min-width: 70px;
  align-items: center;
  justify-content: space-between;
`;

const Favorite = () => {
  const [like, setLike] = useState(false);
  const [countLike, setCountLike] = useState(10);

  const handleLike = () => {
    //Just a fake like
    if (like) {
      setLike(false);
      setCountLike(countLike - 1);
    } else {
      setLike(true);
      setCountLike(countLike + 1);
    }
  };
  return (
    <FavoriteLayout>
      <IconButton onClick={() => handleLike()} sx={{ p: 0 }}>
        {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      {countLike}
    </FavoriteLayout>
  );
};

export default Favorite;
