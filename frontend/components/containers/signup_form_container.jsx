import { connect } from 'react-redux';
import SessionForm from '../session_form';
import { sign_up, removeErrors, log_in } from '../../actions/session_actions';

const mapStateToProps = ({errors}) => ({
  errors: errors.sessionErrors,
  formType: 'sign up'
})

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(sign_up(user)),
  loginDemo: (user) => dispatch(log_in(user)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)