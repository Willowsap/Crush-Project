import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  page : {
    flex : 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  pictureSection : {
    flex : 0.8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockSection : {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex : 0.2,
  },
  pictureView : {
    flex : 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  motivationalPicture : {
    flex : 1,
    resizeMode : 'contain',
    position : 'absolute',
  },
  topTextWrap : {
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  botTextWrap : {
    flex: 0.3,
    justifyContent: 'flex-start',
  },
  textHeading : {
    fontFamily: 'Europa-Regular',
    fontSize: 34,
    textAlign: 'center',
    color : '#000000',
  },
  time : {
    flex : 0.5,
    fontFamily: 'Europa-Light',
    fontSize: 40,
    textAlign: 'center',
  },
  textBody : {
    flex : 0.5,
    paddingTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Europa-Regular',
    fontSize: 18,
    color : 'gray',
    flexWrap: 'wrap',
  },
  num : {
    fontSize : 90,
    fontFamily: 'Europa-Regular',
  },
});
