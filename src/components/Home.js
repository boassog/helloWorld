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
      <View>
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
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            // Actions.detail();
          }} style={styles.row}>
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={styles.photo} />
          <View style={{paddingLeft:10}}>
            <Text style={styles.title}>
              {data.name}
            </Text>
            <Text>
            {data.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
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
