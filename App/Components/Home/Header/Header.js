'use strict';

import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './HeaderStyles';

export default class Header extends React.Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.topBuffer} />
        <View style={styles.main}>
          <View style={styles.iconSection}>
            <View style={styles.iconWrapper}>
              <Icon.Button name="bars" backgroundColor='#EB4480' size={30} onPress={this.openMenu} />
            </View>
            <View style={styles.iconBuffer}/>
          </View>
          <View style={styles.messageSection}>
            <Text style={styles.textBig}>Today you crushed</Text>
            <View style={styles.textInner}>
              <Text style={styles.textMedium}>{this.props.crushNum}</Text>
              <Text style={styles.textSmall}> out of </Text>
              <Text style={styles.textMedium}>5</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  openMenu() {

  }
}
