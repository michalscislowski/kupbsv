import React from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  userMenu: {
    borderRadius: '15px', 
    padding: 0,
    '&:hover': {
      cursor: "default"
    }
  },
  iconStyle: {
    color: "white", 
    fontSize: "25px"
  }
}));

export default function SimpleMenu(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const classes = useStyles();

  const userId = props.userId;
  const userIds = [
    "45350", // Cieszyn
    "45112", // Mati
    "39715", // Arczi
    "44325", // Jeksa
    "38978", // Scisly
  ];

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    setChecked((prev) => !prev);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  
    const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
        <Button ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle} style={{ color: '#ffffff', fontSize: '16px', }}>
          {open ? <CloseIcon className={classes.iconStyle}/> : <MenuIcon className={classes.iconStyle} />}
        </Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} className={classes.userMenu}>
                  <Link as="/regulamin" href="/regulamin" ><MenuItem component="a" onClick={handleClose }>Regulamin</MenuItem></Link>
                  <Link as="/onas" href="/onas"><MenuItem  component="a" onClick={handleClose }>O nas</MenuItem></Link>
                  <Link as="/faq" href="/faq"><MenuItem component="a" onClick={handleClose }>FAQ</MenuItem></Link>
                  <Link as="/blog" href="/blog" ><MenuItem component="a" onClick={handleClose }>BLOG</MenuItem></Link>
                  <div>{userIds.includes(userId)
                  ? <Link as="/Create" href="/Create" ><MenuItem component="a" onClick={handleClose }>Dodaj Post</MenuItem></Link>
                  : null}
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <style>{`

      `}</style>
    </div>
  );
}