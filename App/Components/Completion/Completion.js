'use strict';

import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import styles from './CompletionStyles.js';
import content from 'App/Content/CompletionContent.js';

import CrushButton from 'App/Components/Common/CrushButton.js';
import Waiting from 'App/Components/Completion/Waiting/Waiting.js';
import Share from 'App/Components/Completion/Share/Share.js';

export default class Completion extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      waiting : false,
      sharing : false,
    };
    this.wait = this.wait.bind(this);
    this.share = this.share.bind(this);
  }
  render() {
    let share = this.share;
    let wait = this.wait;
    if (this.state.waiting) {
      return (
        <Waiting refresh={this.props.refresh}/>
      );
    } else if (this.state.sharing) {
      return (
        <Share finish={this.wait}/>
      );
    } else {
      return (
        <View style={styles.page}>
          <View style={styles.pictureContainer}>
            <View style={styles.topBuffer} />
            <Image
              style={styles.motivationalPicture}
              source={content.image}
            />
          </View>
          <View style={styles.textSection}>
            <Text style={styles.textHeading}>
              {content.header}
            </Text>
            <Text style={styles.textBody}>
              {content.body}
            </Text>
          </View>
          <View style={styles.buttonSection}>
            <View style={styles.buttonOuter}>
              <View style={styles.buttonBuffer} />
              <View style={styles.buttonInner}>
                <CrushButton
                  click={share}
                  title={content.shareButton.title}
                  type={content.shareButton.type}
                />
              </View>
              <View style={styles.buttonBuffer} />
            </View>
            <View style={styles.buttonOuter}>
              <View style={styles.buttonBuffer} />
              <View style={styles.buttonInner}>
                <CrushButton
                  click={wait}
                  title={content.skipButton.title}
                  type={content.skipButton.type}
                  />
              </View>
              <View style={styles.buttonBuffer} />
            </View>
          </View>
        </View>
      );
    }
  }
  share() {
    this.setState({sharing:true});
  }
  wait() {
    this.setState({waiting:true});
  }
}
