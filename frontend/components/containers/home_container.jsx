import {connect} from 'react-redux';
import Home from '../home';
import { log_in } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(log_in(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);