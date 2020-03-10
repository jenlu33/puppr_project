import React from 'react';
import LoggedInHeader from './logged_in_header';
// import PhotoIndexItem from './photo_index_item';
import { Link } from 'react-router-dom';


class PhotosIndex extends React.Component {
  constructor(props) {
    super(props)
    
    this.viewPhoto = this.viewPhoto.bind(this);
  }

  componentDidMount() {
    this.props.displayPhotos();
  }

  viewPhoto(e) {
    this.props.history.push(`/photos/${e.currentTarget.id}`)
  }

  render() {
    const { photos } = this.props;

    return(
      <div className="main-photo-index-div">
        <div className="photos-container">
            <ul className="photos-ul">
              {
                photos.map(photo => 
                  // users.map(user => 
                    <div className="photo-box"
                        key={`${photo.id}`}
                    >

                      {/* <h2>{users[photo.id].username}</h2> */}
                      <li 
                        
                        className="photo-index-item"
                        id={`${photo.id}`}
                        onClick={this.viewPhoto}
                      >
                        <img 
                          className="index-photo"
                          src={photo.photoUrl}/>
                      </li>

                      <div className="photo-details-container">
                        <div className="photo-details">
                          <h2>{photo.title}</h2>
                        
                      </div>
                    </div>
                  </div>
                  // )
              )}
            </ul>
        </div>
      </div>
    )
  }
}

export default PhotosIndex;