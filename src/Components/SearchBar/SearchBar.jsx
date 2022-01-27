import React, { useState } from "react";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { stringsConstants } from "../../Constants";

const InputStyle = styled.div`
  width: 100%;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  box-shadow: -1px 0px 8px 5px rgb(0 0 0 / 5%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  background-color: #ffffff;
`;

const SearchBar = () => {
  const [inputs, setInputs] = useState({ search: "" });
  const navigate = useHistory();
  const { search } = inputs;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate.push(`/items/?search=${search}`);
  };

  return (
    <InputStyle>
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <form onSubmit={handleSubmit}>
        <InputBase
          sx={{ ml: 1, flex: 1, width: "100vh" }}
          placeholder={stringsConstants.SEARCH_LABEL}
          inputProps={{ "aria-label": stringsConstants.SEARCH_LABEL }}
          required
          fullWidth
          id="search"
          label={stringsConstants.SEARCH_LABEL}
          name="search"
          value={search}
          onChange={handleChange}
        />
      </form>
    </InputStyle>
  );
};

export default SearchBar;
