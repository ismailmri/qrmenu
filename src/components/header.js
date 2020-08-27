import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../css/header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby';


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
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{marginTop: "2%", fontSize: "21px"}}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/">Menu</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/contact">Contact</Link></MenuItem>
      </Menu>
      <Button href="/snipcart-checkout" className="snipcart-checkout" />
    </div>
  );
}