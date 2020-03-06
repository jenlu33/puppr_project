import { connect } from 'react-redux';
import PhotoIndex from '../containers';
import { fetchAllPhotos } from '../../util/photo_api_util';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  photos: Object.values(state.entities.photos)

})

const mapDispatchToProps = dispatch => ({
  displayPhotos: () => dispatch(fetchAllPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);