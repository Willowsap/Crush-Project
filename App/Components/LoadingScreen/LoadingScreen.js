'use strict';

import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import styles from './LoadingScreenStyles.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('App/Assets/Images/LoadingScreen.png')}
        />
      </View>
    );
  }
}
