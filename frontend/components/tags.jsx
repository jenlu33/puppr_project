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
  };

  componentDidMount() {
    this.props.displayTags(this.props.match.params.photoId)
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
  }

  render() {
    const { currentUser, photo, tags } = this.props;

    const tagForm = currentUser.id === photo.user_id ? (
      <form onSubmit={this.handleSubmit} className="tags-form">
        <input type="text" onChange={this.updateName} placeholder="tag name"/>
        <input type="submit" value="Create Tag"/>
      </form>
    ):(null)

    return(
      <div className="main-tags-div">
        {tagForm}
        <div className="all-tags">
          <ul className="tags-ul">
            {
              tags.map(tag => 
                <li key={tag.id} className="tags-li">
                  <p>{tag.name}</p>
                </li>)
            }
          </ul>
        </div>
      </div>
    )
  };
};

export default Tags;