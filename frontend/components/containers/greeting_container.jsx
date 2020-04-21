import { connect } from 'react-redux';
import Greeting from '../greeting';
import { log_in, log_out, fetchUsers } from '../../actions/session_actions';
import {fetchPhotos, clearPhotos } from '../../actions/photo_actions';


const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  photos: Object.values(state.entities.photos).reverse()
})

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(log_in(user)),
  logout: () => dispatch(log_out()),
  displayPhotos: (photos) => dispatch(fetchPhotos(photos)),
  fetchUsers: () => dispatch(fetchUsers()),
  clearPhotos: () => dispatch(clearPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)
