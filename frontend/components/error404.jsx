import React from 'react';
import {Link} from 'react-router-dom';

const error404 = () => {
  return (
  <div className="error404-div">
    <h1 className="error-h1">ERROR</h1>
    <h1>404</h1>
    <h1>PAGE NOT FOUND</h1>
    <img src={window.sad}/>
    <Link to="/" className="error-link">Back to Feed</Link>
  </div>
  )
}

export default error404;