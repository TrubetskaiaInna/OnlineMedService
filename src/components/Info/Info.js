import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '300px',
    flexWrap: 'wrap'
  }
}))

const TransitionsModal = (props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <button type='button' onClick={handleOpen} style={{ width: 285 }}>
        More info
      </button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
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

          <div className={classes.paper} style={{ outline: 'none' }}>
            <div style={{ width: '315px', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}><h3>{props.doctor.fullName}</h3>
              <IconButton style={{ outline: 'none' }} edge='start' size='small' color='inherit' onClick={handleClose}
                aria-label='close'>
                <CloseIcon />
              </IconButton>
            </div>
            <span>{props.doctor.info}</span>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
export default TransitionsModal
