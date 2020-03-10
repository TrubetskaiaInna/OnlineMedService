import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ExampleComponent from "../BraintreeDropin/ClientAppContainer";
import "./Payment.scss";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "570px",
    flexWrap: "wrap"
  }
}));

const Payment = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showButton = () => {
    setShow(false);
  };

  return (
    <div>
      {show && !props.appointment.transactionId ? (
        <button className="btn-sm btn-outline-primary" onClick={handleOpen}>
          Payment
        </button>
      ) : (
        <div className="textPayment">Paid</div>
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{ outline: "none" }}>
            <p>The amount that will be debited from your bil: 300$</p>
            <>
              <ExampleComponent
                appointment={props.appointment}
                handleClose={handleClose}
                showButton={showButton}
              />
            </>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default Payment;
