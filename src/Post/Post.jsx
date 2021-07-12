import React from 'react'
import './post.css'
import picfour from '../Assets/pic-4.jpg'

const Post = () => {
    return (
        <div className="post">
            <img
             className="postImg"
             src={picfour} alt=""
            />
        <div className="postInfo">
           <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
           </div>
           <span className="postTitle">
               The Quick Brown Fox Jumped 
           </span>
           <hr/>
           <span className="postDate">1 hour Ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, maiores, iusto dignissimos non illo 
            molestias soluta deleniti harum aliquam amet numquam voluptatem! Vitae, id! Voluptas rerum doloribus 
            dolore repellendus porro!
        </p>
        </div>
    )
}

export default Post
