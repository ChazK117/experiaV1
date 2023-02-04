import {
    Home,
    Restore,
    Subscriptions,
    VideoLibrary,
    Whatshot,
    SettingsOutlined,
    HelpOutlineOutlined,
  } from "@material-ui/icons";
  import React from "react";
 
  import { useHistory } from "react-router-dom";
  import "./Sidebar.css";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  
 

const Sidebar = ({index,darkMode, setDarkMode}) => {


   const history = useHistory();
   const handleClick =()=>history.push("/")

  return (
    <div className={`sidebar`}>


       <div className="sidebar__buttons">

          <div className="sidebar__btn">
           <Home onClick={handleClick} className="sidebar__icon" />
          </div>

         <div className="sidebar__btn">
           <Whatshot className="sidebar__icon" />
          </div>

          <div className="sidebar__btn">
            <Subscriptions className="sidebar__icon" />
          </div>
      </div>

      <div className="sidebar__buttons bottom">
        <div className="sidebar__btn ">
          <VideoLibrary className="sidebar__icon" />
        </div>

        <div className="sidebar__btn ">
          <Restore className="sidebar__icon" />
        </div>

        <div className="sidebar__btn ">
          <SettingsOutlined  className="sidebar__icon" />
        </div>

        <div className="sidebar__btn ">
          <HelpOutlineOutlined  className="sidebar__icon" />
        </div>

      </div>

      <div className="sidebar__btn Sidebar_brandicon ">
       <a href="https://www.linkedin.com/in/chaz-liam-81545b226" target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faLinkedin}/>
        </a>
      </div>

      <div className="sidebar__btn Sidebar_brandicon ">
       <a href="https://github.com/ChazK117" target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faGithub}/>
        </a>
      </div>

    </div>
  )
}

export default Sidebar
