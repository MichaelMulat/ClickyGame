import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function MessageBar(props) {
  const { message } = props;
  return (
    <div>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#607d8b"
        }}
      >
        <Toolbar>
          <Typography style={{ flexGrow: 1 }} variant="title" color="inherit">
            {message}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MessageBar;
