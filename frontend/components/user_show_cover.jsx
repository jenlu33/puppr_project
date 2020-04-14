import React from 'react';
import { Link } from 'react-router-dom';

const UserShowCover = props => (
  <div>
    <div className="user-cover">
      <div className="user-show-info">
      <p className="show-username">{props.showUser.username}'s {props.pageType}</p>
      </div>
    </div>

    <div className="user-nav-bar">
      <Link
        to={`/users/${props.showUser.id}`}
        className="nav-user-photos">
        Photos
      </Link>

      <Link
        to={`/users/${props.showUser.id}/albums`}
        className="nav-user-albums">
        Albums
      </Link>
    </div>
  </div>

);

export default UserShowCover;