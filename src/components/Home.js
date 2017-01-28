import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView,
  Image,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import api from '../utilities/api';

class Home extends React.Component{

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      myArray: [],
      dataSource: ds.cloneWithRows([])
    }
  }

  componentWillMount(){
    console.log('GET Match')
    api.getMatchs().then((res) => {
      console.log('GET Champ')
      const resChamp = res.matches.map((item, i) => {
        api.getChampionById(item.champion).then((result) => {
          this.setState({
            myArray: this.state.myArray.concat([result]),
            dataSource: this.state.dataSource.cloneWithRows(this.state.myArray)
          })
        })
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
            // Actions.detail();
          }}>
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={styles.photo} />
          <Text style={styles.buttonNext}>
            {data.name}
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
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    padding: 20,
  },
  photo: {
    width: 50,
    height: 50,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#EAEAEA',
  },
});

export default Home;
