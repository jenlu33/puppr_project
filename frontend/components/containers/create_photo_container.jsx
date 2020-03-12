import React from 'react';
import { connect } from 'react-redux';
import CreatePhoto from '../create_photo';
import { createPhoto, removePhotoErrors } from '../../actions/photo_actions'

const mapStateToProps = state => ({
  errors: state.errors.photoErrors
})

const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhoto(photo)),
  removeErrors: () => dispatch(removePhotoErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePhoto);