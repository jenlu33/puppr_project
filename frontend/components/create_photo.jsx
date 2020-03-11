import React from 'react';
import { Link } from 'react-router-dom';

class CreatePhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      caption: ""
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[caption]', this.state.caption);
    if (this.state.photoFile) {
      formData.append('photo[photo]', this.state.photoFile)
    }

    $.ajax({
      url: 'api/photos',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    })

  }

  render() {
    return (
      <div className="main-photo-form-div">
        <div className="upload-header">
          <Link className="upload-puppr" to="/">
            <div className="upload-logo">
              <p id="logo1">pupp</p>
              <p id="logo2">r</p>
            </div>
          </Link>
        </div>

        <div className="upload-toolbar">
          <div className="upload-tools-left">

          </div>
        </div>

        <form className="upload-form">

        </form>
      </div>
    )
  }
}

export default CreatePhoto;