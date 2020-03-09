import React from 'react';
import { Link } from 'react-router-dom';


class PhotoShow extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  render() {
    const {photo} = this.props;
    return (
      <div className="main-photo-show-div">
        
        <h2>a single pup</h2>
        <div className="photo-content-container">
          <div className="photo-content">
            <button className="back-btn">back to activity feed</button>
            <div className="single-photo-container">
              {/* <img src={photo.photoUrl} alt=""/> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoShow;