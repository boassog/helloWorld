import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

class Home extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>
          Hello Home
        </Text>
        <TouchableOpacity
          onPress={() => {
            Actions.detail();
          }}
        >
          <Text style={styles.buttonNext}>
            Go to Detail
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonNext: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});

export default Home;
