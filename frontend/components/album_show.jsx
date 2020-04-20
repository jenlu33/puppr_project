import React from 'react';
import LoggedInHeader from './logged_in_header';

class AlbumShow extends React.Component {
  constructor(props){
    super(props);
  };

  render() {
    return(
      <div>
        {<LoggedInHeader {...this.props}/>}
        <br/>
        <br/>
        <br/>
        <p>ALBUM SHOW PAGE</p>
        <p>{this.props.album.title}</p>
      </div>
    )
  };
};

export default AlbumShow;