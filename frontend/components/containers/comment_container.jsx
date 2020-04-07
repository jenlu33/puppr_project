import { connect } from 'react-redux';
import Comments from '../comments';
import { fetchComments, createComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);