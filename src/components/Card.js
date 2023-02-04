import React, { useState } from 'react'
import {
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  Share

} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import pic from "../assets/FPSMicroGame.jpg";
import { useHistory } from "react-router-dom";


function Card({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory()
  const handleThumb = () => history.push('/watch')
  const handleAvatar = () => history.push('/Preview')

  return (

    
    
    <div className='videothumb'
    style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
       <img
        onClick={handleThumb}
        className='videothumb__thumbnail' 
       src = {pic}
       alt = 'Thumbnail'
       />

     <div className="videothumb__details">
        <Avatar onClick={handleAvatar}/>


        <div className="videothumb__channel">
          <h1 className="videothumb__title">FPS Microgame</h1>

          <div className="videothumb__texts">
            <p className="videothumb__text">Unity</p>
            <p className="videothumb__text">123 views • 03/02/2023</p>
            <p className="videothumb__text"><font color="red">PC ONLY</font></p>
          </div>
        </div>
      </div>

      <div classname = "listItem"
      >
      {isHovered && (
        <>
          <div className="itemInfo">
            <div className="icons">
              <Add className="icon" />
              <Share className="icon"/>
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="desc">
            The FPS Microgame is a 3D First Person Shooter game that you can mod and customize using the Unity game engine.  
            </div>
            
          </div>
        </>
      )}
      </div>

    </div>

     

  )
}

export default Card
