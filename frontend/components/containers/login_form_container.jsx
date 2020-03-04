import React from 'react';
import { connect } from 'react-redux';
import SessionForm from '../session_form';
import {log_in} from '../../actions/session_actions';

const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  formType: 'log in'
})

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(log_in(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)