import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chat.css';

const Chat = () => {
  const [comments, setComments] = useState([]);
  const [searchUser, setSearchUser] = useState('');
  const [userInput, setUserInput] = useState('');
  const [foodInput, setFoodInput] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [replyInputs, setReplyInputs] = useState({});

  // Fetch all comments from the backend
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/comments');
        setComments(res.data);
      } catch (err) {
        console.error('Error fetching comments:', err);
      }
    };
    fetchComments();
  }, []);

  const handlePostComment = async () => {
    if (!userInput || !foodInput || !commentInput) return;

    try {
      const res = await axios.post('http://localhost:5000/api/comments', {
        user: userInput,
        food: foodInput,
        text: commentInput,
      });

      setComments([res.data, ...comments]);
      setCommentInput('');
      setFoodInput('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const handleReply = async (commentId) => {
    const replyText = replyInputs[commentId];
    if (!replyText) return;

    try {
      const res = await axios.post(`http://localhost:5000/api/comments/${commentId}/reply`, {
        user: userInput,
        text: replyText,
      });

      const updatedComments = comments.map((comment) =>
        comment._id === commentId ? res.data : comment
      );
      setComments(updatedComments);
      setReplyInputs({ ...replyInputs, [commentId]: '' });
    } catch (error) {
      console.error('Error adding reply:', error);
    }
  };

  const filteredComments = comments.filter((c) =>
    searchUser ? c.user.toLowerCase().includes(searchUser.toLowerCase()) : true
  );

  return (
    <div className="chat-page">
      <div className="chat-header">
        <h2>Community Food Forum 🍽️</h2>
        <input
          type="text"
          placeholder="🔍 Search user"
          className="search-bar"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
        />
      </div>

      {/* New Comment Box */}
      <div className="new-comment">
        <input
          type="text"
          placeholder="Your name"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Food name"
          value={foodInput}
          onChange={(e) => setFoodInput(e.target.value)}
        />
        <textarea
          placeholder="Write your comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button onClick={handlePostComment}>Post Comment</button>
      </div>

      {/* Comments & Replies */}
      <div className="comment-section">
        {filteredComments.length === 0 ? (
          <p className="no-comments">No comments found.</p>
        ) : (
          filteredComments.map((comment) => (
            <div key={comment._id} className="comment-box">
              <div className="comment-content">
                <h4>{comment.user} on <em>{comment.food}</em></h4>
                <p>{comment.text}</p>
              </div>

              {/* Replies */}
              <div className="replies">
                {comment.replies.map((reply) => (
                  <div key={reply._id} className="reply">
                    <strong>{reply.user}:</strong> {reply.text}
                  </div>
                ))}

                {/* Reply Input */}
                <div className="reply-box">
                  <input
                    type="text"
                    placeholder="Write a reply..."
                    value={replyInputs[comment._id] || ''}
                    onChange={(e) =>
                      setReplyInputs({ ...replyInputs, [comment._id]: e.target.value })
                    }
                  />
                  <button onClick={() => handleReply(comment._id)}>Reply</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Chat;
