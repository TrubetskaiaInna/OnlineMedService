import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  },
  root: {
    background: "silver"
  }
}));
export default function Message(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
          classes: {
            root: classes.root
          }
        }}
        message={
          <span id="message-id" style={{ color: props.color }}>
            {props.text}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
}
