'use strict';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import styles from './HabitIconStyles.js';
import CrushIcon from 'App/Components/Common/CrushIcon.js';

export default class HabitIcon extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.edit = this.edit.bind(this);
  }

  render() {
    return (
      <TouchableOpacity style={(this.props.selected) ? styles.selectedButton : styles.button} onPress={this.edit}>
        <CrushIcon name={this.props.name} size={60} />
      </TouchableOpacity>
    );
  }
  edit() {
    this.props.check(this.props.name, this.props.index);
  }
}
