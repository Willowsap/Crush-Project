'use strict';

import React from 'react';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';

export default class ImageNum extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let {height, width} = Dimensions.get('window');
    const {num, style, imageStyle, numStyle, imageSrc} = this.props;
    return (
      <View style={style}>
        <Image
          style={imageStyle}
          source={imageSrc}
        />
        <Text style={numStyle}>{num}</Text>
      </View>
    );
  }
};
