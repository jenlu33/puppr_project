import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInHeader from './logged_in_header';

class TagPhotoIndex extends React.Component {
  constructor(props){
    super(props);
  };

  componentDidMount() {
    this.props.fetchTag(this.props.match.params.tagId)
    // this.props.displayPhotos(this.props.match.params.tagId)
    // console.log(this.props.match.params);
    
  }

  render() {
    const {tag} = this.props;
    return(
      <div>
        {<LoggedInHeader {...this.props} />}
        <br/>
        <br/>
        <br/>
        <div>
          {/* <h1>{tag.name}</h1> */}
        </div>
        <p>THESE ARE TAGGED PHOTOS</p>
      </div>
    )
  }
};

export default TagPhotoIndex;