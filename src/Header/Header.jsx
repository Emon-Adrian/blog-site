import React from 'react'
import "./Header.css"
import PicTwo from '../Assets/pic-2.jpg'

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                 <span className="headerTitlesSm">React & Node </span>
                 <span className="headerTitlesLg">Blog</span>
            </div>
            <img
             className="headerImg"
             src={PicTwo}
             alt=""
            />
        </div>
    )
}

export default Header
