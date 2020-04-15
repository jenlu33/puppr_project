import { connect } from 'react-redux';
import AlbumCreate from '../album_create';
import { createAlbum } from '../../actions/album_actions';
import { fetchUserPhotos } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  photos: Object.values(state.entities.photos)
});

const mapDispatchToProps = dispatch => ({
  createAlbum: (album) => dispatch(createAlbum(album)),
  displayPhotos: (userId) => dispatch(fetchUserPhotos(userId))
});

export default connect(mapStateToProps,mapDispatchToProps)(AlbumCreate);