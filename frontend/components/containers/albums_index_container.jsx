import { connect } from 'react-redux';
import AlbumIndex from '../albums_index';
import { fetchAlbums } from '../../actions/album_actions';
import { log_out } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  showUser: state.entities.users[ownProps.match.params.userId],
  albums: Object.values(state.entities.albums).reverse(),
  pageType: "albums"
});

const mapDispatchToProps = dispatch => ({
  displayAlbums: (userId) => dispatch(fetchAlbums(userId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: () => dispatch(log_out())
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);