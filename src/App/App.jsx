import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import Routes from "../Routes";

import { Main } from "../Components/ThemeComponents";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const alert = useSelector((state) => state.alert);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
    // eslint-disable-next-line
  }, [alert]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpen(false);
    }
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Main>
      <CssBaseline />
      {alert.message && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={alert.message}
          action={action}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={alert.type === "alert-success" ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
      )}

      <Routes />
    </Main>
  );
}

export { App };
