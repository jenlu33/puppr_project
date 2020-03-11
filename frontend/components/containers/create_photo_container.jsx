import React from 'react';
import { connect } from 'react-redux';
import CreatePhoto from '../create_photo';
import { createPhoto } from '../../actions/photo_actions'

const mapStateToProps = state => ({
  errors: state.errors.photos
})

const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhoto(photo))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePhoto);