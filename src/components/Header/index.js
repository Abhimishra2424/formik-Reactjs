import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" >Formik Form</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
