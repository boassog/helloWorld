import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Detail extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>
          Hello Detail
        </Text>
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
});

export default Detail;
