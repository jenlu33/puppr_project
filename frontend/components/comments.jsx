import React from 'react';
import { Link } from 'react-router-dom';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      photo_id: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };

  updateBody(e) {
    this.setState({
      body: e.target.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    const photoId = this.props.match.params.photoId;
    const comment = Object.assign( {},
      this.state, {
        body: this.state.body,
        photo_id: photoId
      });
    this.props.createComment(comment);

    this.setState({
      body: "",
      photo_id: ""
    })
  };

  handleDelete(e) {
    e.preventDefault;
    this.props.deleteComment(e.target.id);
  };

  renderErrors() {
    return (
      <ul className="comment-errors">
        {this.props.commentErrors.map((error, i) => 
        <li key={`error-${i}`}>
          {error}
        </li>
        )}
      </ul>
    );
  };

  componentWillUnmount() {
    this.props.removeCommentErrors();
  }

  render() {
    const { comments, currentUser, photo } = this.props;

    return (
      <div className="main-comments-div">

        <div className="comment-errors-container">
          {this.renderErrors()}
        </div>

        <form className="comments-form" onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.updateBody}
            className="comment-text" 
            placeholder="add a comment"
            rows="6"
            value={this.state.body}/>

          <input type="submit" className="comment-submit" value="Comment"/>
        </form>

      <div className="all-comments">
        <ul className="comments-ul">
          {
            comments.map(comment =>
            
              <li key={`${comment.id}`} className="comments-li">
                <div className="individual-comment-container">
                  <Link 
                    className="comment-username" 
                    to={`/users/${comment.user_id}`}>
                      {comment.username}
                  </Link>
                  <p className="comment-body">{comment.body}</p>
                </div>
                {currentUser.id == comment.user_id ? (
                  <button 
                    id={comment.id} 
                    onClick={this.handleDelete}
                    className="delete-comment-btn">
                      delete
                  </button>
                ) : (null)}
              </li>
            
          )}
        </ul>
      </div>
        
      </div>
    )
  };
};

export default Comments;