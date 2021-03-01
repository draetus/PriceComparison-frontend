import React from 'react';
import {TouchableRipple, withTheme} from 'react-native-paper';
import {StyleSheet, Image, View} from 'react-native';
import Video from 'react-native-video';
import {Images, Metrics} from '../../config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class VideoPlayer extends React.Component {
  state = {
    showVideo: false,
  };

  render() {
    const styles = createStyle(this.props);
    return this.state.showVideo ? (
      <Video
        {...this.props}
        onError={(error) => console.log({error})}
        controls
        style={styles.size}
      />
    ) : (
      <TouchableRipple onPress={() => this.setState({showVideo: true})}>
        <>
          <Image source={Images.thumbnail} style={styles.size} />
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              color={this.props.theme.colors.background}
              name="play"
              size={Metrics.getSize(52)}
            />
          </View>
        </>
      </TouchableRipple>
    );
  }
}

export default withTheme(VideoPlayer);

function createStyle(props) {
  const width =
    Metrics.screenWidth - (Metrics.spacingLG + Metrics.spacingMD) * 2;
  const height = width / 1.75;
  return StyleSheet.create({
    iconContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000090',
    },
    size: {
      width: width,
      height: height,
    },
  });
}
