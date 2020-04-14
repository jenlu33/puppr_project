import { connect } from 'react-redux';
import AlbumCreate from '../album_create';
import { createAlbum } from '../../actions/album_actions';


const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  createAlbum: (album) => dispatch(createAlbum(album))
});

export default connect(mapStateToProps,mapDispatchToProps)(AlbumCreate);