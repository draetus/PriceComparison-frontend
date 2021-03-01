import React from 'react';
import {withNavigation} from '@react-navigation/compat';

class FocusScreenHandler extends React.Component {
  constructor(props) {
    super(props);
    this.focused = true;
  }
  componentDidMount() {
    this.unsubiscribeFocus = this.props.navigation.addListener('focus', () => {
      this.focused = true;
      this.forceUpdate();
    });
    this.unsubiscribeBlur = this.props.navigation.addListener('blur', () => {
      this.focused = false;
    });
  }

  shouldComponentUpdate() {
    if (this.focused) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUnmount() {
    this.unsubiscribeFocus();
    this.unsubiscribeBlur();
  }
}

export default withNavigation(FocusScreenHandler);
