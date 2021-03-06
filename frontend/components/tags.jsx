import React from 'react';
import { Link } from 'react-router-dom';

class Tags extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      photo_id: ""
    }

    this.updateName = this.updateName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const photoId = this.props.match.params.photoId;
    const tag = Object.assign({},
      this.state, {
        name: this.state.name,
        photo_id: photoId
      });
    this.props.createTag(tag);

    this.setState({
      name: "",
      photo_id:""
    })
  }

  handleDelete(e) {
    e.preventDefault;
    this.props.deleteTag(e.target.id);
  }

  render() {
    const { currentUser, photo, tags } = this.props;

    const tagForm = currentUser.id === photo.user_id ? (
      <form onSubmit={this.handleSubmit} className="tags-form">
        <input 
          type="text" 
          onChange={this.updateName} 
          placeholder="tag name"
          className="tag-text-input"
          value={this.state.name}/>
        <input 
          type="submit" 
          value="Create Tag"
          className="tag-submit-btn"/>
      </form>
      ):(null);

    return(
      <div className="main-tags-div">
        <h1 className="tags-header">Tags</h1>
        {tagForm}
        <div className="all-tags">
          <ul className="tags-ul">
            {
              tags.map(tag => 
                <li key={tag.id} className="tags-li">
                  {/* <Link to={`/tags/${tag.id}`} className="tag-link">{tag.name}</Link> */}
                  <p className="tag-link">{tag.name}</p>
                  {currentUser.id === photo.user_id ? (
                    <button 
                      id={tag.id}
                      className="delete-tag-btn"
                      onClick={this.handleDelete}>x</button>
                  ) : (null)}
                </li>)
            }
          </ul>
        </div>
      </div>
    )
  };
};

export default Tags;