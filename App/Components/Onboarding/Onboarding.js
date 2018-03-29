'use strict';

import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './onboarding_styles.js';
import content from 'App/Content/OnboardingContent.js';

import OnboardingScreen from 'App/Components/Onboarding/OnboardingScreen/OnboardingScreen.js';


export default class Onboarding extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      currPage : 0,
      numPages : 2,
    };
    this.advance = this.advance.bind(this);
  }

  render() {
    let pageData = content[this.state.currPage];
    let pageDots = this.buildPageDots();
    return (
      <View style={styles.page}>
        <View style={styles.onboardingScreen}>
          <OnboardingScreen
            textHead={pageData.messages.header}
            textBody={pageData.messages.body}
            image={pageData.image}
            advance={this.advance}
            button={pageData.button}
          />
        </View>
        <View style={styles.pageNum}>
          <View style={styles.pageDots}>
            {pageDots}
          </View>
          <View style={styles.pageDotsBuffer} />
        </View>
      </View>
    );
  }
  advance() {
    if (this.state.currPage >= this.state.numPages-1) {
      this.props.finish();
    } else {
      this.setState((prevState) => {
        return {currPage : prevState.currPage+1};
      });
    }
  }
  buildPageDots() {
    let pageDots = [];
    for (let i = 0; i < this.state.numPages; i++) {
      if (i == this.state.currPage) {
        pageDots.push(
          <Icon name="circle" color='#000000' backgroundColor="#FFFFF" size={14} style={{paddingHorizontal: 4}} key={i} />
        );
      } else {
        pageDots.push(
          <Icon name="circle-o" color='#000000' backgroundColor="#FFFFF" size={14} style={{paddingHorizontal: 4}} key={i}/>
        );
      }
    }
    return pageDots;
  }
}
