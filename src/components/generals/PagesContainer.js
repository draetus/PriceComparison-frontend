import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Metrics} from '../../config';
import {withTheme} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Header from './Header';

const PageScrollContext = React.createContext(null);
class PagesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.scrollRef = React.createRef(null);
    this.clonedChildren = React.cloneElement(this.props.children, {
      scrollToTop: this.scrollToTop,
    });
  }

  scrollToTop = () => {
    setTimeout(() => {
      this.scrollRef.current.scrollTo({y: 0, animated: true});
    }, 1);
  };
  render() {
    const styles = createStyles(this.props);
    return (
      <View style={styles.container}>
        {this.props.withHeader ? (
          <Header hideMenu={this.props.hideMenu} />
        ) : null}
        {this.props.hideScroll ? (
          this.props.children
        ) : (
          <ScrollView
            ref={this.scrollRef}
            style={styles.scrollContainer}
            scrollToOverflowEnabled
            contentContainerStyle={styles.contentContainer}>
            <PageScrollContext.Provider value={{scrollToTop: this.scrollToTop}}>
              {this.props.children}
            </PageScrollContext.Provider>
          </ScrollView>
        )}
      </View>
    );
  }
}

export default withTheme(PagesContainer);
export {PageScrollContext};

function createStyles(props) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContainer: {
      flex: 1,
      backgroundColor: props.theme.colors.background,
    },
    contentContainer: {
      flexGrow: 1,
      padding: Metrics.spacingLG,
    },
  });
}
