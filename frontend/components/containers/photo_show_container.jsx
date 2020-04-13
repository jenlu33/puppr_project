import { connect } from 'react-redux';
import PhotoShow from '../photo_show';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions'
import { log_out } from '../../actions/session_actions';
import {fetchComments, createComment, deleteComment} from '../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  photo: state.entities.photos[ownProps.match.params.photoId],
  comments: Object.values(state.entities.comments).reverse() 
})

const mapDispatchToProps = dispatch => ({
  fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
  deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
  displayComments: (comments) => dispatch(fetchComments(comments)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  logout: () => dispatch(log_out())
})

export default connect (mapStateToProps, mapDispatchToProps)(PhotoShow);
