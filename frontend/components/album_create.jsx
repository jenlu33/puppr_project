import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInHeader from './logged_in_header';

class AlbumCreate extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.displayPhotos(this.props.match.params.userId);
  };

  render() {
    return (
      <div>
        {<LoggedInHeader {...this.props}/>}
        CREATE NEW ALBUM HERE
      </div>
    )
  };
};

export default AlbumCreate;