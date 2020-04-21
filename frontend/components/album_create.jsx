import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInHeader from './logged_in_header';

class AlbumCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photo_ids: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  };

  componentDidMount() {
    this.props.displayPhotos(this.props.currentUser.id);
  };

  updateTitle(e) {
    this.setState({
      title: e.target.value
    });
  };

  handleSelect(e) {
    e.preventDefault();
    const newIds = this.state.photo_ids;
    const photoId = e.target.id;
    if (newIds.includes(photoId)) {
      newIds.splice(newIds.indexOf(photoId), 1);
    } else {
      newIds.push(photoId)
    }

    this.setState({
      photo_ids: newIds
    });
    
  };

  handleSubmit(e) {
    e.preventDefault();
    const album = Object.assign({},
      {
        title: this.state.title,
        photo_ids: this.state.photo_ids,
      }
    );
    this.props.createAlbum(album)
      .then(this.props.history.push(`/users/${this.props.currentUser.id}/albums`));
  };

  toggleSelect(e) {
    e.preventDefault();
    const photoId = e.currentTarget.id;
    const element = document.getElementById(photoId);
    element.classList.toggle("selected");
  };

  render() {
    if (!this.props.photos) return null;

    return (
      <div>
        {<LoggedInHeader {...this.props}/>}
        
        <div className="create-album-div">
          <form className="create-album-form" onSubmit={this.handleSubmit}>
            <input 
              type="text"
              className="create-album-title"
              placeholder="title"
              onChange={this.updateTitle}/>

            <input type="submit" className="album-submit-btn" value="create album"/>
          
            <div className="select-album-photos">
              {
                this.props.photos.map(photo =>
                  <div
                    key={photo.id} 
                    onClick={this.handleSelect}>

                    <img
                      id={photo.id}
                      className="click-photo"
                      src={photo.photoUrl}
                      onClick={this.toggleSelect}
                      />
                  </div>
                )
              }
            </div>
          
          </form>
        </div>
      </div>
    )
  };
};

export default AlbumCreate;