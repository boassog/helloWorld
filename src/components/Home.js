import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import api from '../utilities/api';

var DATA =[];

class Home extends React.Component{

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(DATA),
    }
  }

  componentWillMount(){
    api.getMovies().then((res) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(res.champions),
      })
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
         />
      </View>
    )
  }

  renderRow(data) {
    return (
      <View>
        <TouchableOpacity onPress={() => {
            Actions.detail();
          }}>
          <Text style={styles.buttonNext}>
            {data.id}
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
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonNext: {
    fontSize: 20,
    textAlign: 'center',
    color: 'gray',
    padding: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#EAEAEA',
  },
});

export default Home;
