import React from "react";

export const CommentDetails = ({author, date, content}) => {
    return (
    <div style={{ marginBottom : 5 }} className="comment">
        <a href="/" className="avatar">
          <img src="https://source.unsplash.com/random" alt="avatar" />
        </a>
        <div className="content">
          <a href="/author" className="author">
            {author}
          </a>
          <div className="matadata">{date}</div>
          <div className="text">{content}</div>
        </div>
      </div>
    )
};