import { connect } from 'react-redux';
import PhotoIndex from '../photos_index';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchUsers, log_out } from '../../actions/session_actions'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  photos: Object.values(state.entities.photos),
  pageType: 'index'

})

const mapDispatchToProps = dispatch => ({
  displayPhotos: (photos) => dispatch(fetchPhotos(photos))
})

export default connect(mapStateToProps,mapDispatchToProps)(PhotoIndex);