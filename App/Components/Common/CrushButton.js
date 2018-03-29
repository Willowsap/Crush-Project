'use strict';
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class CrushButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.buildStyle = this.buildStyle.bind(this);
  }

  render() {
    let styles = this.buildStyle();
    return (
      <TouchableOpacity style={styles.touchable} onPress={this.props.click}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  buildStyle() {
    let styles = StyleSheet.create({
      touchable : {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
      },
      button : this.getButtonStyle(this.props.type).button,
      text: this.getButtonStyle(this.props.type).text,
    });
    return styles;
  }

  getButtonStyle(buttonType) {
    let buttons = {
      pinkButton : {
        button : {
          flexDirection: 'row',
          borderRadius : 40,
          backgroundColor : '#EB4480',
          borderWidth : 0,
          alignItems: 'center',
          justifyContent: 'center',
        },
        text: {
          flex:1,
          color: '#fff',
          textAlign: 'center',
          padding: 8,
          fontSize: 20,
          fontFamily: 'Europa-Bold',
        },
      },
      greyButton : {
        button : {
          flexDirection: 'row',
          borderRadius : 40,
          backgroundColor : '#EDEDED',
          borderWidth : 0,
        },
        text: {
          flex:1,
          color: '#AFAFAF',
          textAlign: 'center',
          padding: 8,
          fontSize: 20,
          fontFamily: 'Europa-Bold',
        },
      },
      minimalButton : {
        button : {
          flexDirection: 'row',
          borderWidth : 0,
        },
        text: {
          flex:1,
          color: '#000000',
          textAlign: 'center',
          padding: 8,
          fontSize: 20,
          fontFamily: 'Europa-Regular',
          textDecorationLine : 'underline',
        },
      },
    }
    return buttons[buttonType];
  }
}
