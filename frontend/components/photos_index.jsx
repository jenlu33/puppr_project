import React from 'react';
import LoggedInHeader from './logged_in_header';
import PhotoIndexItem from './photo_index_item';
import { Link } from 'react-router-dom';


class PhotosIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // debugger
    this.props.displayPhotos();
  }

  render() {
    const { photos } = this.props;

    return(
      <div className="main-photo-index-div">
        { <LoggedInHeader /> }

        <div></div>
        <div className="photos-container">
          <ul className="photos-ul">
            {
              photos.map(photo => 
                <li 
                  key={photo.id}
                  className="photo-index-item"
                  id={photo.id}

                  >
                  <div className="photo-index-details">
                    
                  </div>

                </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PhotosIndex;