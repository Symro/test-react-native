import React from 'react'
import { TextInput, Image, Button, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import globalStyle from '../styles/Style'

import List from './List'

class Search extends React.Component {

  static navigationOptions = {
    title: 'Rechercher une ville',
    tabBarIcon : () => {
      return <Image source={require('../icons/home.png')} style={{width: 32, height: 32}} />
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      city: 'Marseille'
    }
  }

  setCity(city) {
    this.setState({city})
  }

  submit() {
    this.props.navigation.navigate('Result', {city: this.state.city})
  }

  render () {
    return(
      <View style={globalStyle.container}>
        <TextInput
          underlineColorAndroid = 'transparent'
          style = {globalStyle.input}
          value = {this.state.city}
          onChangeText = {(text) => this.setCity(text)}
        />
        <Button color={globalStyle.brandPrimaryColor} onPress={() => this.submit()} title='Rechercher une ville' />
      </View>
    )
  }
}

const navigationOptions = {
  headerStyle: globalStyle.header,
  headerTitleStyle: globalStyle.headerTitle
}

export default StackNavigator({
  Search: {
    screen: Search,
    navigationOptions
  },
  Result: {
    screen: List,
    navigationOptions
  }
})
