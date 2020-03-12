import React from 'react';
import LoggedInHeader from './logged_in_header';
import { Link } from 'react-router-dom';


class PhotosIndex extends React.Component {
  constructor(props) {
    super(props)
    
    this.viewPhoto = this.viewPhoto.bind(this);
  }

  componentDidMount() {
    this.props.displayPhotos();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log(this.props);
    if (prevProps.match.url !== this.props.match.url) {
      this.props.displayPhotos();
    }
  } 

  viewPhoto(e) {
    this.props.history.push(`/photos/${e.currentTarget.id}`)
  }

  render() {
    document.title = "Puppr | Feed"

    const { photos } = this.props;



    return(
      <div className="main-photo-index-div">

        <div className="photos-container">
            <ul className="photos-ul">
              {
                photos.reverse().map(photo => 
                  <div className="photo-box"
                      key={`${photo.id}`}>

                    <div className="photo-index-user-info">
                      <h2>{photo.user.username}</h2>
                      <h2 className="featured">Featured</h2>
                    </div>

                    <li 
                      className="photo-index-item"
                      id={`${photo.id}`}
                      onClick={this.viewPhoto}>
                      <img 
                        className="index-photo"
                        src={photo.photoUrl}/>
                    </li>

                    <div className="photo-title-container">
                      <h2 className="photo-title">{photo.title}</h2>
                  </div>
                </div>
              )}
            </ul>
        </div>
      </div>
    )
  }
}

export default PhotosIndex;