import { connect } from 'react-redux';
import AlbumIndex from '../albums_index';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  albums: Object.values(state.entities.albums),
});

const mapDispatchToProps = dispatch => ({
  displayAlbums: (userId) => dispatch(fetchAlbums(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);