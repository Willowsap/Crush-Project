'use strict';
import React from 'react';
import {Text, View, Button, TextInput, Modal, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';

import styles from './HabitEditStyles.js';
import CrushButton from 'App/Components/Common/CrushButton.js';
import HabitIcon from 'App/Components/Home/HabitIcon/HabitIcon.js';

export default class HabitEdit extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      nameInput : this.props.name,
      iconInput : this.props.icon,
      iconIndex : -1,
    };
    this.selectIcon = this.selectIcon.bind(this);
    this.updateName = this.updateName.bind(this);
    this.saveHabit = this.saveHabit.bind(this);
    this.deleteHabit = this.deleteHabit.bind(this);
    this.buildIcons = this.buildIcons.bind(this);
  }

  render() {
    const icons = this.buildIcons();
    return (
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={this.saveHabit}
        onShow={this.updateName}
        visible={this.props.visible}>
        <View style={styles.container}>
          <View style={styles.topBuffer} />
          <KeyboardAvoidingView behavior="height" style={styles.centerRow} height={400}>
            <View style={styles.rowBuffer} />
            <View style={styles.centerColumn}>
              <View style={styles.header}>
                <TextInput
                  style={styles.text}
                  onChangeText={(nameInput) => this.setState({nameInput})}
                  value={this.state.nameInput}
                  autoFocus={true}
                  underlineColorAndroid='transparent'
                  placeholder='Start typing...'
                />
              </View>
              <ScrollView style={styles.iconBox}>
                <Text style={styles.iconText}>Select Icon (Optional)</Text>
                <View style={styles.iconList}>
                  { icons }
                </View>
                <View style={styles.iconBuffer} />
              </ScrollView>
              <View style={styles.buttonBox}>
                <View style={{flex:0.45,flexDirection:'row',alignItems:'stretch',justifyContent:'space-around'}}>
                  <CrushButton type='greyButton' click={this.deleteHabit} title="Delete" />
                </View>
                <View style={{flex:0.1}} />
                <View style={{flex:0.45,flexDirection:'row',alignItems:'stretch',justifyContent:'center'}}>
                  <CrushButton type='pinkButton' click={this.saveHabit} title="Save" />
                </View>
              </View>
            </View>
            <View style={styles.rowBuffer} />
          </KeyboardAvoidingView>
          <View style={styles.bottomBuffer} />
        </View>
      </Modal>
    );
  }
  selectIcon(iconName, iconIndex) {
    this.setState({iconInput : iconName})
    this.setState({iconIndex : iconIndex})
  }
  saveHabit() {
    this.props.save(this.props.habitIndex, this.state.nameInput, this.state.iconInput);
  }
  deleteHabit() {
    this.props.delete(this.props.habitIndex);
  }
  updateName() {
    this.setState({nameInput:this.props.name});
  }

  buildIcons() {
    const iconList = [
      "shoe-icon",
      "shoe-icon",
      "shoe-icon",
      "shoe-icon",
      "shoe-icon",
      "shoe-icon",
      "shoe-icon",
      "shoe-icon",
      "shoe-icon",
      "shoe-icon",
      "shoe-icon",
      "shoe-icon",
      "shoe-icon",
      "shoe-icon",
    ];
    let icons = [];
    for (let i = 0; i < iconList.length; i++) {
      if (this.state.iconIndex == i) {
        icons.push(
          <HabitIcon name={iconList[i]} check={this.selectIcon} key={i} index={i} selected={true}/>
        );
      } else {
        icons.push(
          <HabitIcon name={iconList[i]} check={this.selectIcon} key={i} index={i} selected={false}/>
        );
      }
    }
    return icons;
  }
}
