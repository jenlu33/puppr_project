import React from 'react';
import { Link } from 'react-router-dom';

class CreatePhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      caption: "",
      upload: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
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
    formData.append('photo[photo]', this.state.photoFile);

    this.props.createPhoto(formData)
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result,
        upload: true
      })
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  renderErrors() {

  }

  render() {
    document.title = "Puppr | Upload"

    const main = this.state.upload ? (
      <div className="uploading-container">
        <p className="editing">Editing</p>
        <input
          type="text"
          className="upload-photo-title"
          placeholder="title"
          onChange={this.update('title')} />
        <textarea
          rows="5"
          className="upload-photo-caption"
          onChange={this.update('caption')}
          placeholder="add a caption" />

        <input type="submit" className="upload-photo-submit" value="Upload photo" />
      </div>
    ) : (
      <div className="fake-upload-btn">Choose photo to upload
          <input
          type="file"
          onChange={this.handleFile}
          className="photo-upload-btn"
        />
      </div>
    )

    return (
      <div className="main-photo-form-div">
        <div className="upload-header">
          <Link className="upload-logo" to="/">
              <p id="logo1">pupp</p>
              <p id="logo2">r</p>
          </Link>
        </div>

        <div className="upload-toolbar">
          <div className="upload-tools-left">
            <div className="fake-add-btn">

              <div className="fake-add-btn-wrapper">
                <div className="add-btn-icon"></div>
                <label className="upload-add">Add</label>
              </div>

              <input
                type="file"
                onChange={this.handleFile}
                className="tool-photo-upload-btn"
              />
            </div>
              
          </div>
        </div>

        <form className="upload-form" onSubmit={this.handleSubmit}>
          {main}
  


        </form>
      </div>
    )
  }
}

export default CreatePhoto;