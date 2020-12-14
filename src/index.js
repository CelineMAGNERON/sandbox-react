import React from "react";
import ReactDOM from "react-dom";
import { CommentDetails } from "./CommentDetails";

const CommentConfig = [
    {author : 'Alex', date : 'Today at 6:00 PM', content : 'Great post !'},
    {author : 'Sam', date : 'Today at 8:15 PM', content : 'Informative. Thanks'},
    {author : 'Jade', date : 'Today at 6:00 PM', content : 'Looks great'},
    {author : 'Brian', date : 'Today at 9:30 PM', content : "I'm in the kitchen"}
]

export const App = () => {
    const renderComments = () => {
        return CommentConfig.map((comment, i) => {
            return (
                <CommentDetails
                key={i}
                author={comment.author}
                date={comment.date}
                content={comment.content}
                />
            );
        });
    };

  return (
    <div className='ui container comments'>{renderComments()}</div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
