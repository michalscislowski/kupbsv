import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon style={{color: "white", fontSize: "25px"}} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem href="/regulamin"  component="a" onClick={handleClose }>Regulamin</MenuItem>
        <MenuItem href="/onas"  component="a" onClick={handleClose }>O nas</MenuItem>
        <MenuItem href="/faq"  component="a" onClick={handleClose }>FAQ</MenuItem>  
        <MenuItem href="/kontakt"  component="a" onClick={handleClose }>Kontakt</MenuItem>
        <MenuItem href="/rodo"  component="a" onClick={handleClose }>RODO</MenuItem>
        <MenuItem href="/blog"  component="a" onClick={handleClose }>BLOG</MenuItem>
      </Menu>
    </div>
  );
}