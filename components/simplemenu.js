import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

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
        <Link as="/regulamin" href="/regulamin" ><MenuItem component="a" onClick={handleClose }>Regulamin</MenuItem></Link>
        <Link as="/onas" href="/onas"><MenuItem  component="a" onClick={handleClose }>O nas</MenuItem></Link>
        <Link as="/faq" href="/faq"><MenuItem component="a" onClick={handleClose }>FAQ</MenuItem></Link>
        <Link as="/blog" href="/blog" ><MenuItem component="a" onClick={handleClose }>BLOG</MenuItem></Link>
        
      </Menu>
      <style>{`

      `}</style>
    </div>
  );
}