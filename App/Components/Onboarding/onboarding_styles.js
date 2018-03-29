'use strict';
import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  page : {
    flex : 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  onboardingScreen : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pageNum : {
    flex : 0.1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageDots : {
    flex:0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageDotsBuffer : {
    flex : 0.2,
  },
});
