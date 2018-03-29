'use strict';
import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button : {
    height: 50,
    backgroundColor: '#FFFFFF',
    flexDirection : 'row',
    flex : 1/4,
    justifyContent : 'space-between',
    alignItems : 'center',
  },
  habitName : {
    flex : 0.7,
    fontFamily: 'Europa-Bold',
    fontSize: 18,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  icon : {
    flex : 0.3,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 10,
  },
  checked : {
    flex : 0.2,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 10,
  },
  editBox : {
    flex : 0.8,
    flexDirection : 'row',
    justifyContent : 'space-between',
  }
})
