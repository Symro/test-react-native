import React from 'react'
import {View, Text, Image, Button} from 'react-native'

import globalStyle from '../styles/Style'

export default class About extends React.Component {

  static navigationOptions = {
    tabBarIcon : () => {
      return <Image source={require('../icons/user.png')} style={{width: 32, height: 32}} />
    }
  }

  search () {
    this.props.navigation.navigate('Search')
  }

  render () {
    return (
      <View style={globalStyle.container}>
        <Text style={globalStyle.title}>A propos de l'application</Text>
        <Text>Test d'application avec React native</Text>
        <Button color={globalStyle.brandPrimaryColor} onPress={() => this.search()} title='Rechercher' />
      </View>
    )
  }
}
