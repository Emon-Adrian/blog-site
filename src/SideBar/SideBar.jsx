import React from 'react'
import "./SideBar.css"
import picThree from ".././Assets/pic-3.svg"

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                  src={picThree} alt="us"
                />
                <p>
                Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and 
                more with a full suite of responsive flexbox utilities. 
                For more complex implementations, custom CSS may be necessary.
                </p>
            </div>
            <div className="sidebarItem">
              <span className="sidebarTitle">CATEGORIES</span>
              <ul className="sidebarList">
                 <li className="sidebarListItem">Life</li>
                 <li className="sidebarListItem">Music</li>
                 <li className="sidebarListItem">Style</li>
                 <li className="sidebarListItem">Sport</li>
                 <li className="sidebarListItem">Tech</li>
                 <li className="sidebarListItem">Cinema</li>
              </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
            <div className="sidebarSocial">
                  <i className="sidebarIcon fab fa-twitter"></i>
                  <i className="sidebarIcon fab fa-instagram"></i>
                  <i className="sidebarIcon fab fa-github"></i>
            </div>
            </div>
        </div>
    )
}

export default SideBar
