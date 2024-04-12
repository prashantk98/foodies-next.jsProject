import { useContext, useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/notification-context";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([])
  const notificationCtx = useContext(NotificationContext);
  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`).then((res) => res.json()).then((data) => {
        setComments(data.comment)
      })
    }
  },[showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
    notificationCtx.showNotification({
      title: "Sending comments...",
      message: "your comment is currently being stored into a database.",
      status: "pending",
    });
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success",
          message: "Your comment was saved!",
          status: "success",
        });
      }).catch(error => {
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || 'Something went wrong!',
          status: 'error'
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
