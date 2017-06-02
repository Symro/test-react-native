import React from 'react';
import { View, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'

import About from './components/About'
import Search from './components/Search'

const Tabs = TabNavigator({
  Search: { screen: Search },
  About: { screen: About }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    indicatorStyle: {
      height: 2,
      backgroundColor: '#fff'
    },
    style: {
      backgroundColor: '#a2273c',
      borderTopWidth: 2,
      borderColor: '#3f101c'
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar hidden={true} />
        <Tabs />
      </View>
    );
  }
}
