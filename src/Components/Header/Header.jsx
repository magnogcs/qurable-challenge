import React, { useState } from "react";
import styles from "./Header.module.css";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
  Tooltip,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import SearchBar from "../SearchBar";
import styled from "styled-components";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  color: #000000;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin: 1rem;
  }

  @media (max-width: 768px) {
    img {
      margin-bottom: 1rem;
    }
  }
`;

const IconButtonStyled = styled(IconButton)`
  @media (max-width: 768px) {
    margin-left: -45px !important;
    margin-top: -65px !important;
  }
`;

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Header = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll {...props}>
          <AppBar
            sx={
              !trigger
                ? { backgroundColor: "transparent" }
                : { backgroundColor: "#ffffff" }
            }
          >
            <Toolbar>
              <Container>
                <Nav className={styles.menu}>
                  <NavLink to="/">
                    <img
                      width="150"
                      alt="logo-qurable"
                      src="/assets/logo.svg"
                    />
                  </NavLink>
                  <div style={{ margin: "0 auto" }}>
                    <SearchBar />
                  </div>
                </Nav>
              </Container>
              <div>
                <Tooltip title="Configurações de conta">
                  <IconButtonStyled onClick={handleClick} size="small">
                    <Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
                  </IconButtonStyled>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem>
                    <Avatar /> My Account
                  </MenuItem>
                  <Divider />
                  <MenuItem className={styles.menu}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Share
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
    </>
  );
};

export default Header;
