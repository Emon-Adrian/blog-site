import React from 'react'
import "./settings.css"
import SideBar from '../../SideBar/SideBar'
import Profile from "../../Assets/pic-8.jpg"

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                     <span className="settingsUpdateTitle">Update Your Account</span>
                     <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                   <label>Profile Photo</label>
                   <div className="settingsPP">
                      <img
                       src={Profile}
                       alt=""
                      />
                      <label htmlFor="fileInput">
                      <i class="settingsPPIcon far fa-user-circle"></i>
                      </label>
                      <input type="file" id="fileInput" style={{display:"none"}}/>
                   </div>
                   <label>Username</label>
                   <input type="text" placeholder="name"/>
                   <label>Email</label>
                   <input type="text" placeholder="email@gmail.com"/>
                   <label>Password</label>
                   <input type="text" placeholder=""/>
                   <button className="settingsSubmit">Update Settings</button>
                </form>
            </div>
            <SideBar/>
        </div>
    )
}

export default Settings
