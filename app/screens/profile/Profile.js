import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as UserActions from '../../redux/actions/UserActions';

export default class Profile extends Component {
  componentWillMount() {
    // Redux store action sample

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Hello you</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Baskerville',
  },
};
