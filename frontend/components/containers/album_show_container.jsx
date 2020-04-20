import { connect } from 'react-redux';
import AlbumShow from '../album_show';
import { fetchAlbum, deleteAlbum } from '../../actions/album_actions';
import { fetchUser } from '../../actions/user_actions';
import { log_out } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  album: state.entities.albums[ownProps.match.params.albumId]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(log_out()),
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  deleteAlbum: (albumId) => dispatch(deleteAlbum(albumId))
});

export default connect(mapStateToProps,mapDispatchToProps)(AlbumShow)