import React from 'react';
import { Link } from 'react-router-dom';

class CreatePhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      caption: ""
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
        photoUrl: fileReader.result
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
          <div className="fake-upload-btn">Choose photo to upload
            <input 
              type="file"
              onChange={this.handleFile}
              className="photo-upload-btn"
              />
          </div>
        </form>
      </div>
    )
  }
}

export default CreatePhoto;