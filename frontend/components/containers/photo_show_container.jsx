import { connect } from 'react-redux';
import PhotoShow from '../photo_show';
import { fetchPhoto, deletePhoto, clearPhotos } from '../../actions/photo_actions'
import { log_out } from '../../actions/session_actions';
import {fetchComments, createComment, deleteComment} from '../../actions/comment_actions';
import { removeCommentErrors } from '../../actions/comment_actions';
import { fetchTags, createTag, deleteTag } from '../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  photo: state.entities.photos[ownProps.match.params.photoId],
  comments: Object.values(state.entities.comments).reverse(),
  commentErrors: state.errors.commentErrors ,
  tags: Object.values(state.entities.tags)
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(log_out()),
  fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
  deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
  clearPhoto: () => dispatch(clearPhotos()),
  displayComments: (photoId) => dispatch(fetchComments(photoId)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  removeCommentErrors: () => dispatch(removeCommentErrors()),
  displayTags: (photoId) => dispatch(fetchTags(photoId)),
  createTag: (tag) => dispatch(createTag(tag)),
  deleteTag: (tagId) => dispatch(deleteTag(tagId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
