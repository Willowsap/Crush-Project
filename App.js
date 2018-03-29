'use strict';

import React from 'react';
import { Font } from 'expo';
import { AsyncStorage } from 'react-native';

import Home from './App/Components/Home/Home.js';
import LoadingScreen from './App/Components/LoadingScreen/LoadingScreen.js';
import Completion from './App/Components/Completion/Completion.js';
import Onboarding from './App/Components/Onboarding/Onboarding.js';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      crushedFive : false,
      loading : true,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.crushedFive = this.crushedFive.bind(this);
    this.finishOnboarding = this.finishOnboarding.bind(this);
    this.refresh = this.refresh.bind(this);
    this.componentDidMount();
  }

  render() {
    if (this.state.loading) {
      return (
        <LoadingScreen />
      );
    } else if (this.state.finishedOnboarding != "true") {
      return (
        <Onboarding finish={this.finishOnboarding}/>
      );
    } else if (this.state.crushedFive) {
      return (
        <Completion refresh={this.refresh}/>
      );
    } else {
      return (
        <Home crushedFive={this.crushedFive} />
      );
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Europa-Bold': require('./App/Assets/Fonts/Europa-Bold.otf'),
      'Europa-Light': require('./App/Assets/Fonts/Europa-Light.otf'),
      'Europa-Regular': require('./App/Assets/Fonts/Europa-Regular.otf'),
      'crush5':require('./App/Assets/Fonts/crush5.ttf'),
    });
    this.setState({ finishedOnboarding : "true"});
    this.setState({ loading: false });
  }
  refresh() {
    this.setState({crushedFive : false});
  }
  crushedFive() {
    this.setState({crushedFive : true});
  }
  finishOnboarding() {
    this.setState({"finishedOnboarding": "true"});
  }
}
