import { connect } from 'react-redux';
import PhotoIndex from '../photos_index';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchUsers } from '../../actions/session_actions'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  photos: Object.values(state.entities.photos),
  users: Object.values(state.entities.users)

})

const mapDispatchToProps = dispatch => ({
  displayPhotos: (photos) => dispatch(fetchPhotos(photos)),
  getAllUsers: (users) => dispatch(fetchUsers(users))
})

export default connect(mapStateToProps,mapDispatchToProps)(PhotoIndex);