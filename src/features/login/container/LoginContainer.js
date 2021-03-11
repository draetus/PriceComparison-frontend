import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginPresentation } from '../presentation';
import {Creators} from '../reduxSagas';

class LoginContainer extends Component {

    render() {
      const {loginRequest} = this.props;
        return <LoginPresentation login={loginRequest}/>
    }    
    
}

function mapStateToProps(state) {
    const {isFetching} = state.login;
    return {
      isFetching,
    };
  }
  
function mapDispatchToProps(dispatch) {
    const {loginRequest} = Creators;
    return {
      loginRequest: function ({username, password}) {
        return dispatch(loginRequest(username, password));
      }
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);