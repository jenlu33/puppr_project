import { connect } from 'react-redux';
import SessionForm from '../session_form';
import {log_in, removeErrors} from '../../actions/session_actions';

const mapStateToProps = ({errors}) => ({
  errors: errors.sessionErrors,
  formType: 'log in'
})

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(log_in(user)),
  loginDemo: (user) => dispatch(log_in(user)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)