import React from 'react'
import './TopBar.css'
import Mylogo from './my-icon.svg'
import {Link} from 'react-router-dom'

const TopBar = () => {
    const user = false;
    return (
        <div className='top'>
            <div className='topLeft'>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-instagram"></i>
            <i className="topIcon fab fa-github"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                  <li className='topListItem'>
                      <Link className="link" to="/">HOME</Link>
                  </li>
                  <li className='topListItem'>
                     <Link className="link" to="/about">ABOUT</Link>
                  </li>
                  <li className='topListItem'>
                     <Link className="link" to="/contact">CONTACT</Link>
                  </li>
                  <li className='topListItem'>
                     <Link className="link" to="/write">WRITE</Link>
                  </li>
                  <li className='topListItem'>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className='topRight'>
                {
                    user ? (

                        <img className="topImg"
                        src={Mylogo} alt=''/>
                        ) : (
                            <ul className="topList">
                              <li className='topListItem'>
                                 <Link className="link" to="/login">LOGIN</Link> 
                              </li>
                              <li className='topListItem'>
                                 <Link className="link" to="/register">REGISTER</Link> 
                              </li>
                            </ul>
                            )
                        }
                    <i className="topSearchIcon fas fa-search"></i>      

            </div>
        </div>
    )
}

export default TopBar
