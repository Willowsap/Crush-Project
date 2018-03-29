'use strict';
import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header : {
    flex: 0.3,
    backgroundColor: '#3A3875',
    alignItems: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'column',
  },
  text : {
    color: '#FFFFFF',
    flex : 1,
    fontSize: 20,
    fontFamily: 'Europa-Light',
    textDecorationLine : 'none',
  },
  iconBox : {
    flex : 0.4,
    flexDirection: 'column',
    padding : 20,
  },
  iconList : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  iconText : {
    paddingBottom: 8,
  },
  buttonBox : {
    flex : 0.3,
    flexDirection : 'row',
    padding : 20,
  },
  centerColumn : {
    flex:0.9,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: '#FFFFFF'
  },
  rowBuffer : {
    flex : 0.05,
  },
  container : {
    flex : 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBuffer : {
    flex : 0.2,
  },
  bottomBuffer : {
    flex : 0.4,
  },
  centerRow : {
    flex: 0.4,
    flexDirection: 'row',
    padding:20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
