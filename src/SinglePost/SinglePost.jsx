import React from 'react'
import "./SinglePost.css"
import Team from '.././Assets/pic-7.jpg'

const SinglePost = () => {
    return (
        <div className="singlePost">
          <div className="singlePostWrapper">
              <img src={Team} alt="single Post"/>
              <h1 className="SinglePostTitle">
                  Lorem ipsum dolor sit amet
                  <div className="singlePostEdit">
                  <i className="SinglePostIcon far fa-edit"></i>
                  <i className="SinglePostIcon far fa-trash-alt"></i>
                  </div> 
              </h1>
              <div className="singlePostInfo">
                  <span className="singlePostAuthor">Author: <b>Emon</b></span>
                  <span className="singlePostAuthor">1 hour ago</span>
              </div>
               <p className="singlePostDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Possimus asperiores temporibus vero laudantium laboriosam, 
                  nihil error adipisci? Eveniet sunt nesciunt quaerat porro optio 
                  molestiae vero, blanditiis, unde, laboriosam quis tenetur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Possimus asperiores temporibus vero laudantium laboriosam, 
                  nihil error adipisci? Eveniet sunt nesciunt quaerat porro optio 
                  molestiae vero, blanditiis, unde, laboriosam quis tenetur.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Possimus asperiores temporibus vero laudantium laboriosam, 
                  nihil error adipisci? Eveniet sunt nesciunt quaerat porro optio 
                  molestiae vero, blanditiis, unde, laboriosam quis tenetur.
               </p>
          </div>  
        </div>
    )
}

export default SinglePost
