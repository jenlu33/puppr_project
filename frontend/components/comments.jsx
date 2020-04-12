import React from 'react';
import photo_show_container from './containers/photo_show_container';

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

  componentDidMount() {
    this.props.displayComments(this.props.match.params.photoId);  
    // console.log(this.props);
    
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
  };

  handleDelete(e) {
    e.preventDefault;
    this.props.deleteComment(e.target.id);
    console.log(e.target.id);
    console.log(e.currentTarget);
    
  }

  render() {
    const { comments, currentUser } = this.props;

    return (
      <div className="main-comments-div">

        <form className="comments-form" onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.updateBody}
            className="comment-text" 
            placeholder="add a comment"
            cols="50" 
            rows="7"/>

          <input type="submit" className="comment-submit" value="Comment"/>
        </form>

      <div className="all-comments">
        <ul className="comments-ul">
          {
            comments.map(comment =>
            
              <li key={`${comment.id}`} className="comments-li">
                <p className="comment-username">{comment.username}</p>
                <p className="comment-body">{comment.body}</p>
                {currentUser.id == comment.user_id ? (
                  <button id={comment.id} onClick={this.handleDelete}>x</button>
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