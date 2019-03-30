import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function NavBar(props) {
  const { score, highScore } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography style={{ flexGrow: 1 }} variant="h4" color="inherit">
            Clicky Game
          </Typography>

          <Typography aligncontent="flex-end" variant="h5" color="inherit">
            Score : {score}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
