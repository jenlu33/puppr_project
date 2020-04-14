import React from 'react';

const UserShowCover = props => (
  <div className="user-cover">
    <div className="user-show-info">
<p className="show-username">{props.showUser.username}'s {props.pageType}</p>
    </div>
  </div>
);

export default UserShowCover;