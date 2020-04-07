import { connect } from 'react-redux';
import Comments from '../comment';
import { fetchComments } from '../../util/comment_api_util';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  displayComments: (comments) => dispatch(fetchComments(comments))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);