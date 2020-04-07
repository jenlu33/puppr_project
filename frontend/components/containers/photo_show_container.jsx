import { connect } from 'react-redux';
import PhotoShow from '../photo_show';
import { fetchPhoto, deletePhoto, fetchPhotos } from '../../actions/photo_actions'
import { log_out } from '../../actions/session_actions';
import {fetchComments, createComment} from '../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  photo: state.entities.photos[ownProps.match.params.photoId], 
})

const mapDispatchToProps = dispatch => ({
  fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
  deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
  displayComments: (comments) => dispatch(fetchComments(comments)),
  createComment: (comment) => dispatch(createComment(comment)),
  logout: () => dispatch(log_out())
})

export default connect (mapStateToProps, mapDispatchToProps)(PhotoShow);
