import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  header : {
      flex: 0.2,
  },
  habitScroll : {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  habitContainer : {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  addHabit : {
    position: 'absolute',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  lineStyle : {
    borderWidth: 0.5,
    borderColor:'#323A3B',
    height: 1,
    marginLeft: 20,
    marginRight: 20,
  },
});
