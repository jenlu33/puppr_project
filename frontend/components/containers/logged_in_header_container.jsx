import { connect } from 'react-redux';
import { log_out } from '../../actions/session_actions';
import LoggedInHeader from '../logged_in_header';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

export default connect(mapStateToProps)(LoggedInHeader);