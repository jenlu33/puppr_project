import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInHeader from './logged_in_header';

class AlbumCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photoIds: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  };

  componentDidMount() {
    this.props.displayPhotos(this.props.currentUser.id);
  };

  updateTitle(e) {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const album = Object.assign({},
      this.state, {
        title: this.state.title,
        photo_ids: Object.values(this.state.photo_ids)
      }
    );
    this.props.createAlbum(album);
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
                  <img 
                    key={photo.id} 
                    id={photo.id} 
                    className="select-album-image"
                    src={photo.photoUrl}/>
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