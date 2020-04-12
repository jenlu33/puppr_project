import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      photo_id: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  };

  componentDidMount() {
    this.props.displayComments();  
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

  // componentDidUpdate() {
  //   this.props.displayComments(this.props.match.params.photoId)
  // }

  render() {
    const { comments } = this.props;
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
              <li key={`${comment.id}`}>
                {/* <p>{this.props.user[comment.body.user_id]}</p> */}
                <p>{comment.body}</p>
              </li> 
          )}
        </ul>
      </div>
        
      </div>
    )
  };
};

export default Comments;