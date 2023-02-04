import React from 'react'
import { Avatar, Badge, Button, makeStyles, Popover } from "@material-ui/core";
import {
  CameraAltOutlined,
  PersonAddOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import logo from "../assets/logoBlue.png";
import "./Header.css";


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const history = useHistory();
   const homeClick =()=>history.push("/")

  return (
    <div className="header">
      <div className="header__left">
        <img  onClick={homeClick} className="header__logo" src={logo} alt="Experia" />
         <div className = "Logo">
           Experia
          </div>
      </div>

      <form className="header__center">
      <div class="search-box">
       <input class="search-txt" type="text" name="" placeholder="Type to search"/>
       <a class="search-btn" href="#">
           <i class="fa-solid fa-magnifying-glass"></i>
       </a>
        </div>
      </form>
      <div className="header__right">
          
        <Avatar  onClick={handleClick}/>
        <Popover
          open={open}
          id={id}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical : "bottom",
            horizontal: "center",

        }}
        transformOrigin={{
          vertical: "top",
        }}
        >
          <div className="home__popoverContainer">
            <div className="home__popover__top">
            <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={
                  <div className="home__badge">
                    <CameraAltOutlined className="home__camera" />
                  </div>
                }
              >
                <Avatar className={classes.large} />
              </Badge>
              <div className="home__text">
                <div className="home__displayName">
                  Chaz_K
                </div>
              </div>
              <div className="home__btn">Manage your account</div>
            </div>
            <div className="home__popover__btm">
              <div className="home__addBtn">
                <PersonAddOutlined className="home__addIcon" />
                <p>Add another account</p>
              </div>

              <Button
                variant="outlined"
                className="home__signOut"
              >
                Sign Out
              </Button>

              <div className="home__popover__footer">
                <p>Privacy Policy</p>
                <span>•</span>
                <p>Terms of service</p>
              </div>
            </div>
          </div>
        </Popover>  
      </div>  
    </div>

    
  )
}

export default Header
