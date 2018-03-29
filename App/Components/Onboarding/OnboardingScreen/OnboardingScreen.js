'use strict';

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './OnboardingScreen.styles.js';
import CrushButton from 'App/Components/Common/CrushButton.js';

export default class Onboarding extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let textHead = this.props.textHead;
    let textBody = this.props.textBody;
    let image = this.props.image;
    let advance = this.props.advance;
    let buttonTitle = this.props.button.title;
    let buttonType = this.props.button.type;
    return (
      <View style={styles.wrapper}>
        <View style={styles.pictureContainer}>
          <View style={styles.topBuffer} />
          <Image
            style={styles.motivationalPicture}
            source={image}
          />
        </View>
        <View style={styles.textSection}>
          <Text style={styles.textHeading}>
            {textHead}
          </Text>
          <Text style={styles.textBody}>
            {textBody}
          </Text>
        </View>
        <View style={styles.buttonSection}>
          <View style={styles.buttonBuffer} />
          <View style={styles.buttonInner}>
            <CrushButton
              click={advance}
              title={buttonTitle}
              type={buttonType}
            />
          </View>
          <View style={styles.buttonBuffer} />
        </View>
      </View>
    );
  }
}
