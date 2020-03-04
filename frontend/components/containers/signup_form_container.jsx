import { connect } from 'react-redux';
import SessionForm from '../session_form';
import { sign_up } from '../../actions/session_actions';

const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  formType: 'sign up'
})

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(sign_up(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)