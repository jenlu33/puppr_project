import React from 'react';

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

  render() {
    return (
      <div className="main-photo-form-div">
        <div className="upload-header">
          <div className="upload-logo">
            <p>pupp</p>
            <p>r</p>
          </div>
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