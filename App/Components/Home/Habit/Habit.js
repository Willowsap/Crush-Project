'use strict';

import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import styles from './HabitStyles.js';
import CrushIcon from 'App/Components/Common/CrushIcon.js';

export default class Habit extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.edit = this.edit.bind(this);
    this.check = this.check.bind(this);
  }

  render() {
    return (
      <View style={styles.button}>
        <TouchableOpacity  onPress={this.edit} style={styles.editBox}>
          <View style={styles.icon}>
            <CrushIcon name={this.props.habit.icon} size={60}></CrushIcon>
          </View>
          <Text style={styles.habitName}>{this.props.habit.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checked} onPress={this.check}>
          {
            (this.props.habit.checked)
            ? <CrushIcon name="checkbox-filled" size={50} color='#68D2C5'></CrushIcon>
            : <CrushIcon name="checkbox-empty" size={50} color='#000000'></CrushIcon>
          }
        </TouchableOpacity>
      </View>
    );
  }
  check() {
    this.props.check(this.props.index);
  }

  edit() {
    this.props.edit(this.props.index);
  }
}
