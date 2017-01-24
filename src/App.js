import React from 'react';

import Home from './components/Home';
import Detail from './components/Detail';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

import {
  Platform,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scene key='home' component={Home} title='Home'/>
          <Scene key='detail' component={Detail} title='Detail'/>
        </Scene>
      </Router>
    );
  }
}

export default App;
