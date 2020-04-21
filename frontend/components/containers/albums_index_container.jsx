import { connect } from 'react-redux';
import AlbumIndex from '../albums_index';
import { fetchAlbums, clearAlbums } from '../../actions/album_actions';
import { log_out } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  showUser: state.entities.users[ownProps.match.params.userId],
  albums: Object.values(state.entities.albums).reverse(),
  pageType: "albums"
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(log_out()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  displayAlbums: (userId) => dispatch(fetchAlbums(userId)),
  clearAlbums: () => dispatch(clearAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);