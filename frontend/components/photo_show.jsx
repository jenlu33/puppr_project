import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInHeader from './logged_in_header';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props)

    this.prevPage = this.prevPage.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  prevPage(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {

    const { photo } = this.props;
    document.title = `Puppr | ${photo.title}`


    if (!photo) {
      return null
    } else {

      return (
        <div className="main-photo-show-div">
          
          {<LoggedInHeader {...this.props} />}

          <div className="photo-content-container">
            <button onClick={this.prevPage} className="back-btn">← Back to activity feed</button>

            <div className="photo-content">
              <div className="single-photo-container">
                <img className="show-img" src={photo.photoUrl} alt={photo.title}/>
              </div>
            </div>

          </div>

          <div className="sub-photo-container">
            <div className="sub-photo-content">

              <div className="photo-info">
                <div className="profile-pic-container">
                  <img className="profile-pic" src={photo.photoUrl} alt=""/>
                </div>
              
                <div className="user-photo-info">
                  <h2 className="username">{photo.user.username}</h2>
                  <h2 className="title">{photo.title}</h2>
                  <h2 className="caption">{photo.caption}</h2>
                </div>

                <div className="views"></div>
              </div>
            </div>

              <div className="comments-container">
                <div className="commenter-photo">
                  <h2>image</h2>
                </div>

                <div className="comment">

                  <h2>Comments go here</h2>
                  <h2>comment comment comment comment comment comment comment comment
                    comment comment comment comment comment comment comment comment comment 
                    comment comment comment</h2>
                </div>
              </div>

          </div> {/*sub-photo-container */}
        </div>
      )
    }
  }
}

export default PhotoShow;