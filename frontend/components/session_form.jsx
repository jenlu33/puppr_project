import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.myClick = this.myClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.processForm(user);

    this.props.history.push('/')

    this.setState({
      username: '',
      password: ''
    })
  }

  demoUser(e) {
    e.preventDefault();

    const user = Object.assign({username: demo, password:123123});
    this
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  myClick(e) {
    const ele = document.getElementById("test2");
    ele.classList.toggle(".clicked");
  }

  render() {
    const { formType } = this.props;
    const display = formType === 'log in' ? (
      <div className="change-form">
        <p>not a puppr member?</p>
        <Link id="link" className="pointer" to='/signup'>sign up here</Link>
      </div>
     ) : (
      <div className="change-form">
        <p>already a puppr member?</p>
        <Link id="link" className="pointer" to='/login'>log in here</Link>
      </div>
     )

     const optionText = formType === 'log in' ? (
       <p>log in to puppr</p>
     ) : (
       <p>sign up for puppr</p>
     )

    //  const inputClick =() => {
    //    const ele = document.getElementById("input-label");
    //    ele.classList.add("input-clicked")
    //  }

    return(
      <div className="main-auth-div">

        <div className="auth-toolbar">
          <div className="auth-toolbar-content">
            <Link to='/' className="auth-puppr-h1">puppr</Link>
          </div>
        </div>

      <div className="main-session-container">
        <div className="background">
      

          <div className="option-container">
          <div className="logo-container"></div>
            <h3 className="option-head">{optionText}</h3>
            <form id="form" onSubmit={this.handleSubmit}>

              <div className="input-container">
                <label className="input-label"> Username </label>
                  <input 
                    className="input-area"
                    type="text" 
                    value={this.state.username}
                    // placeholder="Username"
                    onChange={this.update('username')}/>
              </div>
              
              <div className="input-container">
                  <label className="input-label"> Password </label>
                  <input 
                    className="input-area"
                    type="password" 
                    value={this.state.password}
                    onChange={this.update('password')}/>
              </div>
             
              <input id="submit-btn" className="pointer" type="submit" value={formType}/>

            </form>
              {/* <input id="submit-btn" className="pointer" type="submit" value="demo user"/> */}

            <div className="form-separator"></div>

            <div className="change-form-container">
              
              {display}
            </div>
          </div>
          
          {/* <div id="test">Test
            <div onclick={this.myClick} id="test2"></div>
          </div> */}

          {/* <div className="test">Test */}
            {/* <img src="./images/puppy2.jpg" alt=""/> */}
          {/* </div> */}

        </div>
          {/* <div className="photo-cred">
              <h3>tan chow-chow puppy on towel by Samuel Sng</h3>
          </div> */}
      </div>


    </div>
    )
  }
}

export default SessionForm;