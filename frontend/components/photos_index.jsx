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
    this.props.getAllUsers();
  }

  viewPhoto(e) {
    this.props.history.push(`/photos/${e.currentEvent.id}`)
  }

  render() {
    const { photos, users } = this.props;

    return(
      <div className="main-photo-index-div">
        {/* { <LoggedInHeader /> } */}

        <div></div>
        <div className="photos-container">
            <ul className="photos-ul">
              {
                photos.map(photo => 
                  // users.map(user => 
                    <div className="photo-box">
                      {/* <h2>{users[photo.id].username}</h2> */}

                      <li 
                        key={`${photo.id}`}
                        className="photo-index-item"
                        id={photo.id}
                        onClick={this.viewPhoto}
                      >
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