'use strict';

import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from 'App/Components/Home/Header/Header.js';
import Habit from 'App/Components/Home/Habit/Habit.js';
import HabitEdit from 'App/Components/Home/HabitEdit/HabitEdit.js';

import styles from './HomeStyles.js';

export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      crushNum : 4,
      habits : [
        {name : "Ate 5 servings of vegetables", checked : true, icon : "shoe-icon"},
        {name : "Ran 2 miles", checked : true, icon : "shoe-icon"},
        {name : "Drank 5 glasses of water", checked : true, icon : "shoe-icon"},
        {name : "Fed the cats", checked : true, icon : "shoe-icon"},
        {name : "Watered the plants", checked : false, icon : "shoe-icon"},
      ],
      loading : true,
      modalVisible : false,
      currHabit : 0,
      editVisible : false,
    };
    this.addHabit = this.addHabit.bind(this);
    this.saveHabit = this.saveHabit.bind(this);
    this.editHabit = this.editHabit.bind(this);
    this.checkHabit = this.checkHabit.bind(this);
    this.deleteHabit = this.deleteHabit.bind(this);
    this.updateCrushNum = this.updateCrushNum.bind(this);
    this.closeEditScreen = this.closeEditScreen.bind(this);
    this.openEditScreen = this.openEditScreen.bind(this);
    this.removeHabit = this.removeHabit.bind(this);
    this.buildHabits = this.buildHabits.bind(this);
  }

  render() {
    let habits = this.buildHabits();
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Header crushNum={this.state.crushNum} />
        </View>
        <View style={styles.habits}>
          {
            (habits.length > 0)
            ? habits
            : <Text>No Habits Yet</Text>
          }
        </View>
        <View style={styles.addHabit}>
          <Icon.Button name="plus-circle" backgroundColor='white' size={60} color='purple' onPress={this.addHabit} />
        </View>
        {
          (this.state.currHabit != -1)
          ? <HabitEdit
            save={this.saveHabit}
            delete={this.deleteHabit}
            habitIndex={this.state.currHabit}
            name={this.state.habits[this.state.currHabit].name}
            icon={this.state.habits[this.state.currHabit].icon}
            visible={this.state.editVisible}
          />
          : <HabitEdit
            save={this.saveHabit}
            delete={this.deleteHabit}
            habitIndex={this.state.currHabit}
            name={""}
            icon={""}
            visible={this.state.editVisible}
            />
        }
      </View>
    );
  }
  saveHabit(index, newName, newIcon) {
    let newHabits = this.state.habits.slice();
    newHabits[index].name = newName;
    newHabits[index].icon = newIcon;
    this.setState({habits: newHabits});
    this.closeEditScreen();
  }
  addHabit() {
    let newHabits = this.state.habits.slice();
    newHabits.push({name : "", checked : false, icon : "shoe-icon"});
    this.setState({habits : newHabits});
    this.editHabit(newHabits.length - 1);
  }
  editHabit(index) {
    this.setState({currHabit : index});
    this.openEditScreen();
  }
  checkHabit(index) {
    let newHabits = this.state.habits.slice();
    newHabits[index].checked = !newHabits[index].checked;
    this.setState(previousState => {
      return { habits : newHabits };
    });
    this.updateCrushNum();
  }
  updateCrushNum() {
    let crushNum = 0;
    for (let i = 0; i < this.state.habits.length; i++) {
      if (this.state.habits[i].checked) {
        crushNum++;
      }
    }
    if (crushNum >= 5) {
      this.props.crushedFive();
    }
    this.setState({crushNum : crushNum});
  }
  deleteHabit(index) {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this habit?',
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.removeHabit(index)},
      ],
      { cancelable: false }
    );
  }
  removeHabit(index) {
    this.setState({currHabit : -1})
    let newHabits = this.state.habits.slice();
    newHabits.splice(index, 1);
    this.setState({habits : newHabits});
    this.buildHabits();
    this.closeEditScreen();
  }
  closeEditScreen() {
    this.setState({editVisible:false});
  }
  openEditScreen() {
    this.setState({editVisible:true});
  }

  buildHabits() {
    let habits = [];
    for (let i = 0; i < this.state.habits.length; i++) {
      habits.push(<Habit
        habit={this.state.habits[i]}
        key={i}
        index={i}
        edit={this.editHabit}
        check={this.checkHabit}
        />
      );
      habits.push(<View style = {styles.lineStyle} key={(i+1)*-1} />);
    }
    return habits;
  }
}
