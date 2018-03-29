'use strict';

import React from 'react';
import { AuthSession } from 'expo';
import { View, Button } from 'react-native';

const FB_APP_ID = '1831762693542344';

export default class Share extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.post = this.post.bind(this);
  }

  render() {
    return (
      <View style={{flex:1,flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={this.post} title="Post"></Button>
      </View>
    );
  }
  post() {
    this.cancel();
  }
  cancel() {
    this.props.finish();
  }

  /*TODO add facebook login + post*/
  async logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(FB_APP_ID, {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }
}
