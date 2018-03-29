'use strict';
import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper : {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    flexDirection: 'column',
  },
  pictureContainer : {
    flex : 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  motivationalPicture : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode : 'contain',
  },
  textSection : {
    flex : 0.25,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },
  buttonSection : {
    flex: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonInner : {
    flex: 0.6,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  textHeading : {
    fontFamily: 'Europa-Regular',
    fontSize: 34,
    textAlign: 'center',
    color : '#000000',
  },
  textBody : {
    paddingTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Europa-Regular',
    fontSize: 18,
    color : 'gray',
    flexWrap: 'wrap',
  },
  topBuffer : {
    flex:0.2,
  },
  buttonBuffer : {
    flex : 0.2,
  },
});
