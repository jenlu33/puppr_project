import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInHeader from './logged_in_header';

class AlbumShow extends React.Component {
  constructor(props){
    super(props);

    this.viewPhoto = this.viewPhoto.bind(this);
  };

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId)
  }

  viewPhoto(e) {
    this.props.history.push(`/photos/${e.currentTarget.id}`)
  }

  render() {
    const { album } = this.props;

    if (!album) return null;

    const photos = album.photos;
    
    return(
      <div>
        {<LoggedInHeader {...this.props}/>}
      
        <div className="main-album-show-div">
          <Link 
            to={`/users/${album.user_id}/albums`}
            className="all-albums-link"> 
            ← See All Albums
          </Link>
          <p className="album-show-title">{this.props.album.title}</p>

          <div className="album-show-photos">
            <ul className="album-show-ul">
              {photos.map(photo => 
                <img 
                  key={photo.id} 
                  id={photo.id}
                  className="album-show-photo" 
                  onClick={this.viewPhoto}
                  src={photo.photoUrl}/>
                )}
            </ul>
          </div>
        </div>
      </div>
    )
  };
};

export default AlbumShow;