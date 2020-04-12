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
      // photo_id: this.props.photo.id
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('comment[body]', this.state.body);
    // formData.append('comment[photo_id]', this.props.photo.id);
    // this.props.createComment(formData);

    const photoId = this.props.match.params.photoId;
    const comment = Object.assign( {},
      this.state, {
        body: this.state.body,
        photo_id: photoId
      });
    this.props.createComment(comment).then(this.setState({body:""}));
  };

  render() {
    return (
      <div className="main-comments-div">
        <p>Here is where comments go</p>

        <form className="comments-form" onSubmit={this.handleSubmit}>
          <textarea 
            onChange={this.updateBody}
            className="comment-text" 
            placeholder="add a comment"
            cols="50" 
            rows="7"/>

          <input type="submit" className="comment-submit" value="Comment"/>
        </form>

        <br/>
        <br/>
        <br/>
      </div>
    )
  };
};

export default Comments;