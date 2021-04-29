import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import History from './history';
import storage from 'local-storage-fallback';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
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

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  

  
    const name = props.name;
    const avatar = props.userAvatar;
    const email = props.userEmail;
    const paymail = props.primaryPaymail;
    const amount = props.userAmount;
    const currency = props.userCurrency;
    const status = props.userStatus;
  
  function signOut () {
    storage.removeItem('mb_js_client:oauth_access_token');  
    storage.removeItem('mb_js_client:oauth_expiration_time');
    storage.removeItem('mb_js_client:oauth_redirect_uri');
    storage.removeItem('mb_js_client:oauth_refresh_token');
    storage.removeItem('mb_js_client:oauth_state');
  }

  return (
    <div className={classes.root}>
      <div>
        <Button color="secondary"  ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle} style={{ color: '#ffffff', fontSize: '16px', }}>
        <Avatar src={avatar}  style={{width: "30px", height: "30px", marginRight:"10px"}} />
        {name}
      </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <History />
                    <MenuItem style={{pointerEvents: 'none', borderBottom: 'solid'}}>Balans konta: {amount} {currency} </MenuItem>
                    <MenuItem style={{pointerEvents: 'none', borderBottom: 'solid'}}>Email: {email} </MenuItem>
                    <MenuItem style={{pointerEvents: 'none', borderBottom: 'solid'}}>Paymail: {paymail} </MenuItem>
                    <MenuItem style={{pointerEvents: 'none', borderBottom: 'solid'}}>Status: {status} </MenuItem>
                    <MenuItem href="/" component="a" onClick={handleClose, signOut}>Wyloguj</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}