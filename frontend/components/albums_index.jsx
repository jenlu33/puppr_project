import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInHeader from './logged_in_header';
import UserShowCover from './user_show_cover';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.displayAlbums(this.props.match.params.userId);
    this.props.fetchUser(this.props.match.params.userId);
  };

  render() {
    const {showUser} = this.props;
    if (!showUser) return null;
    return (
      <div className="main-album-index-div">
        {<LoggedInHeader {...this.props} />}
   
       {<UserShowCover showUser={showUser} pageType={this.props.pageType}/>}
      
        <div className="user-nav-bar">
          <Link
            to={`/users/${showUser.id}`}
            className="nav-user-photos">
              Photos
          </Link>
          <p>Albums</p>
        </div>

        <div className="user-albums">
          <ul>
            
          </ul>
        </div>
      </div>
    )
  }
}

export default AlbumsIndex;