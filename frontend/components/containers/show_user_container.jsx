import { connect } from 'react-redux'
import { log_out } from "../../actions/session_actions";
import { fetchUserPhotos, clearPhotos } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import UserShow from '../user_show';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  showUser: state.entities.users[ownProps.match.params.userId],
  photos: Object.values(state.entities.photos),
  pageType: 'photos'
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(log_out()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  displayPhotos: (userId) => dispatch(fetchUserPhotos(userId)),
  clearPhotos: () => dispatch(clearPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);