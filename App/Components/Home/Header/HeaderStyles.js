import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'stretch',
    backgroundColor : '#EB4480',
  },
  topBuffer : {
    flex : 0.2,
  },
  main : {
    flex : 0.8,
    flexDirection : 'row',
  },
  iconSection : {
    flex : 0.2,
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    position : 'absolute',
  },
  iconWrapper : {
    flex : 0.5,
  },
  iconBuffer : {
    flex : 0.5,
  },
  messageSection : {
    flex : 1,
    alignItems : 'center',
    flexDirection : 'column',
    justifyContent : 'center',
  },
  textBig : {
    fontFamily: 'Europa-Light',
    fontSize: 30,
    color: 'white',
  },
  textInner : {
    flexDirection:'row',
    alignItems:'center',
  },
  textMedium : {
    fontFamily: 'Europa-Regular',
    fontSize: 35,
    color: 'white',
  },
  textSmall : {
    fontFamily: 'Europa-Light',
    fontSize: 25,
    color: 'white',
  }
});
