import { connect } from 'react-redux';
import Greeting from '../greeting';
import { sign_up, log_in, log_out } from '../../actions/session_actions'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(log_in(user)),
  // signup: (user) => dispatch(sign_up(user)),
  logout: () => dispatch(log_out())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)
