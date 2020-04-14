import React from 'react';
import { connect } from 'react-redux';
import CreatePhoto from '../photo_create';
import { createPhoto, removePhotoErrors } from '../../actions/photo_actions';
import { log_out } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.photoErrors,
  
})

const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhoto(photo)),
  removeErrors: () => dispatch(removePhotoErrors()),
  logout: () => dispatch(log_out(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePhoto);