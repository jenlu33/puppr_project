import { connect } from 'react-redux'
import { log_out } from "../../actions/session_actions";
import { fetchUserPhotos } from '../../actions/photo_actions';
import UserShow from '../user_show';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(log_out()),
  displayPhotos: (userId) => dispatch(fetchUserPhotos(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);