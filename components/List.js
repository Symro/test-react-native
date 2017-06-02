import React from 'react'
import { Text, ActivityIndicator, ListView } from 'react-native'
import axios from 'axios'

import globalStyle from '../styles/Style'

export default class List extends React.Component {

  static navigationOptions = (navigation) => {
    // console.log('==>', params.city);
    return {
      // title: `Méteo - ${navigation.state.params.city}`
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      city: 'Marseille', //this.props.navigation.state.params.city,
      report: null
    }
    this.fetchWeather()
  }

  fetchWeather () {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&ctn=10&id=524901&appid=2e7a3099266a9ebff00f088920788a33`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          report: response.data
        })
      })
  }

  render () {
    if (this.state.report === null) {
      return (
        <ActivityIndicator color={globalStyle.brandPrimaryColor} size='large'/>
      )
    } else {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

      return (
        <ListView>
          dataSource={ds.cloneWithRows(this.state.report.list)}
          renderRow={(row) => <Text>{row.main.temp}</Text>}
        </ListView>
      )
    }
  }

}
