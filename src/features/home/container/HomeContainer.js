import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomePresentation } from '../presentation';
import { Creators as GlobalCreators } from '../../globalReduxSagas';

class HomeContainer extends Component {

    render() {
        const {globalLogout} = this.props;
        return (
        <HomePresentation 
        globalLogout={globalLogout}
        />
        )
    }

}
  
function mapDispatchToProps(dispatch) {
    const { globalLogout } = GlobalCreators;
    return {
      globalLogout: function ({username, password}) {
        return dispatch(globalLogout(username, password));
      }
    };
  }
  
export default connect(null, mapDispatchToProps)(HomeContainer);