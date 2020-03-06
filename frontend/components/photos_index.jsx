import React from 'react';


class PhotosIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.displayPhotos();
  }

  render() {
    const { photos } = this.props;

    return(
      <div className="main-photo-index-div">
        <div>
          <ul>
            {
              // photos.map(photo => (

              // ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default PhotosIndex;