'use strict';

import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions} from 'react-native';

import styles from './WaitingStyles.js';
import { Waiting as content } from 'App/Content/CompletionContent.js';

import CrushButton from 'App/Components/Common/CrushButton.js';
const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;
const _12to3 = _hour * 3;

export default class Waiting extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.options = {
      hour : "2-digit",
      minute : "2-digit",
      second : "2-digit",
    };
    this.state = {
      currTime : this.countDown()
    };
    setInterval( () => {
      this.setState({
        currTime : this.countDown()
      })
    },1000)
  }
  render() {
    let {height, width} = Dimensions.get('window');
    height *= .4;
    width  *= .9
    return (
      <View style={styles.page}>
        <View style={styles.pictureSection}>
          <View style={styles.topTextWrap}>
            <Text style={styles.textHeading}>
              {content.topHead}
            </Text>
          </View>
          <View style={[styles.pictureView, {maxHeight: height, maxWidth: width}]}>
            <Image
              style={[styles.motivationalPicture, {maxHeight: height, maxWidth: width}]}
              source={content.image}
            />
            <Text style={styles.num}>4</Text>
          </View>
          <View style={styles.botTextWrap}>
            <Text style={styles.textHeading}>
              {content.botHead}
            </Text>
          </View>
        </View>
        <View style={styles.clockSection}>
          <Text style={styles.time}>
            {this.state.currTime}
          </Text>
          <Text style={styles.textBody}>
            {content.body}
          </Text>
        </View>
      </View>
    );
  }
  advance() {

  }
  countDown() {
    let now = Date.now() - (new Date().getTimezoneOffset() * _minute);
    let next3am = _day * (Math.floor( (now - _12to3) / _day) + 1) + _12to3;
    let distance = (next3am - now);

    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    hours = (hours < 10) ? ("0"+hours+"h") : (hours+"h");
    minutes = (minutes < 10) ? ("0"+minutes+"m") : (minutes+"m");
    seconds = (seconds < 10) ? ("0"+seconds+"s") : (seconds+"s");
    return hours+" "+minutes+" "+seconds;
  }
}
