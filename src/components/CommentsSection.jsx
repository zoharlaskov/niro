import React, { useState } from "react";
import "./CommentsSection.css";

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="comments-section">
      <h2>אנחנו רוצים לשמוע את החוויות שלך עם ניר</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="הוסף תגובה חדשה..."
        />
        <button type="submit">הוסף תגובה</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsSection;
