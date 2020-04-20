import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInHeader from './logged_in_header';
import UserShowCover from './user_show_cover';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.viewAlbum = this.viewAlbum.bind(this);
  };

  componentDidMount() {
    this.props.displayAlbums(this.props.match.params.userId);
    this.props.fetchUser(this.props.match.params.userId);
  };

  viewAlbum(e) {
    this.props.history.push(`/albums/${e.currentTarget.id}`)
  }

  render() {
    const {showUser, currentUser, albums} = this.props;
    // const albumCover = albums.photos ? (
    //   album.photos
    // ):(null)
    if (!showUser) return null;
    return (
      <div className="main-album-index-div">
        {<LoggedInHeader {...this.props} />}
   
        {<UserShowCover showUser={showUser} pageType={this.props.pageType}/>}
        <div className="album-nav">
          {showUser.id === currentUser.id ? (
             <Link 
            to={`/album/new`}
            className="new-album-link">
            Create New Album
          </Link>
          ): (null)}
         
        </div>


        <div className="user-albums">
          <ul className="albums-ul">
            { albums.map(album => 
              <div 
                key={album.id} 
                id={album.id}
                className="album-index-item"
                onClick={this.viewAlbum}>
                  {/* <p>{album.title}</p> */}
                  {album.photos.length ? (
                    <div className="album-index-wphotos">
                      <img src={Object.values(album.photos)[0].photoUrl}
                          className="album-cover"/>
                          <p className="album-item-title">{album.title}</p>
                    </div>
                    
                  ):(
                    <div className="album-index-nphotos">
                      <p>{album.title}</p>
                      <p>No photos</p>
                    </div>
                    
                  )}

              </div>
              )}
          </ul>
        </div>
      </div>
    )
  }
}

export default AlbumsIndex;